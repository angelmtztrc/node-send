import express from 'express';
import logger from 'better-logging';
require('dotenv').config();

import { PORT } from './constants';

import { database } from './config/database';

import AuthRouting from './routes/authentication.routes';

const bootstrap = async () => {
  logger(console);

  await database();

  const app = express();

  app.use(express.json());

  app.use('/api/authentication', AuthRouting);

  app.listen(PORT, '0.0.0.0', () => {
    console.info(`Listening at http://localhost:${PORT}`);
  });
};

bootstrap();
