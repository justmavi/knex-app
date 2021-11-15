import knex from 'knex';

import * as config from './knexfile';

const env = process.env.ENVIRONMENT ?? 'development';

export default knex(config[env]);
