import mongoose from 'mongoose';

import { DATABASE_URI } from '../constants';

export const database = async (): Promise<void> => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.info('Successful database connection');
  } catch (error) {
    console.error('Something went wrong when trying to connect to the database');
    process.exit(1);
  }
};
