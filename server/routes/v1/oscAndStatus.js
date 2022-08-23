import { readFile, writeFile } from 'fs/promises';
import { Router } from 'express';

import { log } from '../../src/logThemes.js';
import config from '../../config/config.js';
import { getPinStatus, readNewOscConfig } from '../../src/gpioController.js';

const { OSC_CONFIG_FILE_PATH } = config.osc;

const router = new Router();

async function getOscConfig () {
  const oscConfigBuffer = await readFile(OSC_CONFIG_FILE_PATH);
  const oscConfig = JSON.parse(oscConfigBuffer);

  return oscConfig;
}

async function writeOscConfig (oscConfig) {
  await writeFile(OSC_CONFIG_FILE_PATH, JSON.stringify(oscConfig));
}

router.get('/oscConfig', async (req, res) => {
  try {
    const oscConfig = await getOscConfig();

    res.status(200).send(oscConfig);
  } catch (e) {
    res.status(500).send(`Unable to read config: ${e.message}`);
    log.error(e);
  }
});

router.post('/setOscConfig', async (req, res) => {
  try {
    const oscConfig = req.body;

    await writeOscConfig(oscConfig);
    await readNewOscConfig();

    res.status(200).send('');
  } catch (e) {
    res.status(500).send(`Config not set: ${e.message}`);
    log.error(e);
  }
});

router.get('/status', (req, res) => {
  const status = getPinStatus();

  res.status(200).send(status);
});

// eslint-disable-next-line import/prefer-default-export
export { router as oscAndStatus };
