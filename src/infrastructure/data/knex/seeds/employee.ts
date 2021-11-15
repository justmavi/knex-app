import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('employee').del();

  // Inserts seed entries
  await knex('employee').insert([
    { id: 1, colName: 'rowValue1' },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' },
  ]);
}