import dotenv from 'dotenv';
import { Knex } from 'knex';

// dotenv.config(); //({ path: 'C:\\Users\\grisha.poghosyan\\Desktop\\knex-app\\.env' });

export const development: Knex.Config = {
  client: 'pg',
  connection: process.env.POSTGRES_CONNECTION_STRING,
  migrations: {
    tableName: 'knex_migration',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
