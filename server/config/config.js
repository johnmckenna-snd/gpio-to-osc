import 'dotenv/config';

const config = {
  gpio: {
    GPIO_ROOT: process.env.GPIO_ROOT || '/sys/class/gpio',
    GPIO_PORT_NUMBER: process.env.GPIO_PORT_NUMBER || 477,
  },
  server: {
    PORT: process.env.PORT || 4000,
  },
  osc: {
    OSC_CONFIG_FILE_PATH: process.env.OSC_CONFIG_FILE_PATH || './config/oscConfig.json',
  },
};

export default config;
