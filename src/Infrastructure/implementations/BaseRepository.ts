import { Knex } from 'knex';
import IAsyncRepository from '@interfaces/IAsyncRepository';

export default class BaseRepository<T> implements IAsyncRepository<T> {
  private readonly context;
  private readonly entities;

  // All my attempts to use the nameof<T>() instead of tableName were failed
  constructor(context: Knex.Transaction, tableName: string) {
    this.context = context;
    this.entities = context<T>(tableName);
  }

  get(predicate: (model: T) => boolean): Promise<T> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<T> {
    throw new Error('Method not implemented.');
  }
  insert(item: T): Promise<void> {
    throw new Error('Method not implemented.');
  }
  insertMany(items: T[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(item: T): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(item: T): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
