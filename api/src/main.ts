import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(Number(process.env.PORT), '0.0.0.0', () => {
  console.log(`Listening at http://localhost:5000`);
});
