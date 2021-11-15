import dotenv from 'dotenv';
import { Knex } from 'knex';

const root: string = process.cwd().split('src')[0];
const path: string = root + '.env';

dotenv.config({ path });

export const development: Knex.Config = {
  client: 'pg',
  connection: process.env.POSTGRES_CONNECTION_STRING,
  migrations: {
    tableName: 'knex_migration',
    directory: './migrations',
    extension: 'ts',
  },
  seeds: {
    directory: './seeds',
  },
};
