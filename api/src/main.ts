import express from 'express';
import logger from 'better-logging';
require('dotenv').config();

import { PORT } from './constants';
import { database } from './config/database';

const bootstrap = async () => {
  logger(console);

  await database();

  const app = express();

  app.listen(PORT, '0.0.0.0', () => {
    console.info(`Listening at http://localhost:${PORT}`);
  });
};

bootstrap();
