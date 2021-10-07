import express from 'express';
import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

const { APP_PORT, APP_HOST, POSTGRES_CONNECTION_STRING } = process.env;

const pg = knex({
  client: 'pg',
  connection: POSTGRES_CONNECTION_STRING,
});

const app = express();

app.listen(+(APP_PORT as string), APP_HOST as string, () => {
  console.log('Now listening port 3000');
});
