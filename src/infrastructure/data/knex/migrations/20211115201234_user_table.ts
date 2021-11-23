import { Knex } from 'knex';

import { TABLE_USER } from '../../table_names';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_USER, (table: Knex.TableBuilder) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('resetPasswordToken').nullable();

    table.index('name', 'user_name_idx');
    table.index('email', 'user_email_idx');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_USER);
}
