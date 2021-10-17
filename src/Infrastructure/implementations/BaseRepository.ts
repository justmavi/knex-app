import { Knex } from 'knex';
import IAsyncRepository from '@interfaces/IAsyncRepository';

export default class BaseRepository<T> implements IAsyncRepository<T> {
  private readonly context;
  private readonly entities: Knex.QueryBuilder;

  constructor(context: Knex.Transaction, tableName: string) {
    this.context = context;
    this.entities = context<T>(tableName);
  }

  get(predicate: (model: T) => boolean): Promise<T> {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<T[]> {
    return await this.entities.select('*');
  }
  async getById(id: number): Promise<T> {
    return await this.entities.select('*').where({ id }).limit(1).first();
  }
  async insert(item: T): Promise<T> {
    return (await this.entities.insert(item).returning<T>('*')) as T;
  }
  async insertMany(items: T[]): Promise<T[]> {
    return (await this.entities.insert(items).returning<T[]>('*')) as T[];
  }
  async update(id: number, item: T): Promise<T> {
    return (await this.entities
      .where({ id })
      .update(item)
      .returning<T>('*')) as T;
  }
  async delete(id: number): Promise<T> {
    return (await this.entities.where({ id }).del().returning<T>('*')) as T;
  }
}
