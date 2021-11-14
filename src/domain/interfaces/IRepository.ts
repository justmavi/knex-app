import { Knex } from 'knex';
import Model from '@models/Model';

export default interface IRepository<T extends Model<number>> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;

  insert(item: T): Promise<T>;
  insertMany(items: T[]): Promise<T[]>;

  update(item: T): Promise<T>;

  delete(item: T): Promise<T>;
  asQueryable(): Knex.QueryInterface;
}
