import EventEmitter from 'events';
import { writeFile } from 'fs/promises';
import { openSync, readSync } from 'fs';
import epoll from 'epoll';

import { log } from './logThemes.js';
import config from '../config/config.js';

const { Epoll } = epoll;

const { GPIO_ROOT } = config.gpio;

async function initializePin (pin) {
  try {
    try {
      await writeFile(`${GPIO_ROOT}/export`, `${pin}`);
    } catch (e) {
      if (e.message !== 'EBUSY: resource busy or locked, write') throw e;
    }
  } catch (e) {
    log.error(e);
    throw new Error('Unable to initialize Pin');
  }
}

async function gpioWriteDirection (pin, direction) {
  try {
    const directory = `${GPIO_ROOT}/gpio${pin}/direction`;

    await writeFile(directory, direction);
  } catch (e) {
    log.error(e);
    throw new Error('Unable to write pin direction.');
  }
}

async function gpio ({ pin, direction }) {
  try {
    if (!pin || !direction) throw new Error('gpio requires { pin, direction }');
    log.good({ pin, direction });
    const emitter = new EventEmitter();

    await initializePin(pin);
    await gpioWriteDirection(pin, direction);

    const valueDirectory = `${GPIO_ROOT}/gpio${pin}/value`;
    const vdNum = openSync(valueDirectory, 'r+');

    const buffer = Buffer.alloc(1);

    const poller = new Epoll((err, fd) => {
      try {
        if (err) throw err;
        const previousValue = parseInt(buffer.toString(), 10);
        readSync(fd, buffer, 0, 1, 0);
        const currentValue = parseInt(buffer.toString(), 10);
        if (previousValue !== currentValue) {
          if (currentValue === 1) emitter.emit('opened', currentValue);
          if (currentValue === 0) emitter.emit('closed', currentValue);
        }
      } catch (e) {
        log.error('Epoll error');
        log.error(e);
      }
    });

    poller.add(vdNum, Epoll.EPOLLIN);

    if (direction === 'out') {
      emitter.open = () => {
        writeFile(valueDirectory, '1');
      };
      emitter.close = () => {
        writeFile(valueDirectory, '0');
      };
    } else {
      emitter.open = () => {
        log.warn(`Unable to open pin ${pin} becasue direction is not out`);
      };
      emitter.close = () => {
        log.warn(`Unable to close pin ${pin} becasue direction is not out`);
      };
    }

    emitter.read = () => {
      readSync(vdNum, buffer, 0, 1, 0);
      const currentValue = parseInt(buffer.toString(), 10);

      return currentValue ? 'opened' : 'closed';
    };

    return emitter;
  } catch (e) {
    throw new Error(`poopy initialization gpio pin ${pin} \n  ${e.message}`);
  }
}

export default gpio;
