import { Knex } from 'knex';
import IAsyncRepository from '@interfaces/IAsyncRepository';

export default class BaseRepository<T> implements IAsyncRepository<T> {
  private readonly context: Knex.Transaction;
  private readonly tableName: string;

  private get entities(): Knex.QueryInterface {
    return this.context<T>(this.tableName);
  }

  constructor(context: Knex.Transaction, tableName: string) {
    this.context = context;
    this.tableName = tableName;
  }

  get(predicate: (model: T) => boolean): Promise<T> {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<T[]> {
    return await this.entities.select('*');
  }
  async getById(id: number): Promise<T> {
    return await this.entities.where({ id }).first();
  }
  async insert(item: T): Promise<T> {
    const [result] = <T[]>await this.entities.insert(item).returning<T>('*');
    return result;
  }
  async insertMany(items: T[]): Promise<T[]> {
    return <T[]>await this.entities.insert(items).returning<T[]>('*');
  }
  async update(id: number, item: T): Promise<T> {
    const [result] = <T[]>(
      await this.entities.where({ id }).update(item).returning<T>('*')
    );
    return result;
  }
  async delete(id: number): Promise<T> {
    const [result] = <T[]>(
      await this.entities.where({ id }).del().returning<T>('*')
    );
    return result;
  }
}
