import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { log } from './src/logThemes.js';
import config from './config/config.js';
import router from './routes/index.js';

const { PORT } = config.server;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/health', (req, res) => {
  log.status('Reached health endpoint');
  res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
  res.end('Healthy!');
});

app.use('/', router);

process.on('SIGINT', async () => { // for ctrl + c
  process.exit();
});

app.listen(PORT, (e) => {
  if (e) log.error(`well shoot. unable to start server on port: ${PORT}`);
  log.status(`Hello, and welcome to gpio-to-osc! Listening on port: ${PORT}`);
});
