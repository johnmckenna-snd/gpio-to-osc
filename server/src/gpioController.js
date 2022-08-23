import { readFile } from 'fs/promises';
import OSC from 'osc-js';

import { log } from './logThemes.js';
import gpio from './gpioDriver.js';
import config from '../config/config.js';

const { OSC_CONFIG_FILE_PATH } = config.osc;
const { GPIO_PORT_NUMBER } = config.gpio;

const pin18 = await gpio({ pin: GPIO_PORT_NUMBER, direction: 'in' });

async function getOscConfig () {
  const oscConfigBuffer = await readFile(OSC_CONFIG_FILE_PATH);
  const oscConfig = JSON.parse(oscConfigBuffer);

  return oscConfig;
}
let oscConfig = await getOscConfig();

const { targetHost, targetPort } = oscConfig;

let osc = new OSC({
  plugin: new OSC.DatagramPlugin({
    send: {
      port: targetPort,
      host: targetHost,
    },
  }),
});

pin18.on('opened', () => {
  try {
    const { openedMessagePath } = oscConfig;

    const message = new OSC.Message(openedMessagePath);
    osc.send(message);
  } catch (e) {
    log.error(e);
  }
});

pin18.on('closed', () => {
  try {
    const { closedMessagePath } = oscConfig;

    const message = new OSC.Message(closedMessagePath);
    osc.send(message);
  } catch (e) {
    log.error(e);
  }
});

export async function getPinStatus () {
  const status = pin18.read();

  return status;
}

export async function readNewOscConfig () {
  oscConfig = await getOscConfig();
  // eslint-disable-next-line no-shadow
  const { targetHost, targetPort } = oscConfig;
  osc = new OSC({
    plugin: new OSC.DatagramPlugin({
      send: {
        port: targetPort,
        host: targetHost,
      },
    }),
  });
}
