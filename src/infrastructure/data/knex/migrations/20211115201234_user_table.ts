import { Knex } from 'knex';

import { TABLE_USER } from '../../table_names';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_USER, (table: Knex.TableBuilder) => {
    table.uuid('id').primary();
    table.string('user_name').notNullable();
    table.string('email').notNullable();
    table.string('reset_password_token').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_USER);
}
