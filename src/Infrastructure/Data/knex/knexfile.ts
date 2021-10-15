import dotenv from 'dotenv';

dotenv.config({ path: '../../../../.env' });

export const development = {
  client: 'pg',
  connection: process.env.POSTGRES_CONNECTION_STRING,
  migrations: {
    tableName: 'knex_migration',
    directory: './migrations',
  },
  seed: {
    direcory: './seeds',
  },
};
