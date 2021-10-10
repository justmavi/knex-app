import express from 'express';

import dotenv from 'dotenv';
import knex from './knex/knex';

dotenv.config();

const { APP_PORT, APP_HOST } = process.env;

const app = express();

const port = +(APP_PORT as string);
const host = APP_HOST as string;

app.listen(port, host, () => {
  console.log('Now listening port 3000');
});

app.get('/', (req: express.Request, res: express.Response) => {
  const { id }: { id: string } = req.query as { id: string };
  res.status(200).send(id + 1);
});
