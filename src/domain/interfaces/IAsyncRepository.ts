import { Knex } from 'knex';

export default interface IAsyncRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;

  insert(item: T): Promise<T>;
  insertMany(items: T[]): Promise<T[]>;

  update(id: number, item: T): Promise<T>;

  delete(id: number): Promise<T>;
  asQueryable(): Knex.QueryInterface;
}
