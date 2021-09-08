import express from 'express';
import cors from 'cors';

import ProprietarioRouter from './routes/proprietarioRouter.js';
import AnimalRouter from './routes/animalRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/proprietario', ProprietarioRouter);
app.use('/animal', AnimalRouter);

app.listen('3333', () => {
  console.log('Api Started!!');
});
