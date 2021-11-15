import { Knex } from 'knex';

import Model from '@abstractions/Model';

export default interface IRepository<T extends Model<number | string>> {
  getAll(): Promise<T[]>;
  getById(id: number | string): Promise<T>;

  insert(item: T): Promise<T>;
  insertMany(items: T[]): Promise<T[]>;

  update(item: T): Promise<T>;

  delete(item: T): Promise<T>;
  asQueryable(): Knex.QueryInterface;
}
