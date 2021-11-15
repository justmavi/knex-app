import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('employee', (table: Knex.TableBuilder) => {
    table.increments('id');
    table.integer('profileId').unique().notNullable();
    table.integer('weekPosts').defaultTo(0);
    table.integer('weekAnswers').defaultTo(0);
    table.integer('allPosts').defaultTo(0);
    table.integer('allAnswers').defaultTo(0);
    table.integer('topPostsPerWeek').defaultTo(0);
    table.integer('topAnswersPerWeek').defaultTo(0);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('employee');
}
