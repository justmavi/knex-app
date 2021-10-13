import 'reflect-metadata';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { APP_PORT, APP_HOST } = process.env;

const app = express();

const port = +(APP_PORT as string);
const host = APP_HOST as string;

app.listen(port, host, () => {
  console.log('Now listening port 3000');
});

app.get('/', (req: Request, res: Response) => {
  const { id }: { id: string } = req.query as { id: string };
  res.status(200).send(id + 1);
});
