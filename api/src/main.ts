import express from 'express';

const app = express();

app.listen(5000, '0.0.0.0', () => {
  console.log(`Listening at http://localhost:5000`);
});
