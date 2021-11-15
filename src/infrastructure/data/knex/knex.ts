import knex, { Knex } from 'knex';

import { development } from './knexfile';

let config: Knex.Config;

// will be upgraded
switch (process.env.ENVIRONMENT) {
  case 'development':
    config = development;
    break;
  default:
    config = development;
    break;
}

export default knex(config);
