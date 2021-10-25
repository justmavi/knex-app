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

  public async getAll(): Promise<T[]> {
    return await this.entities.select('*');
  }
  public async getById(id: number): Promise<T> {
    return await this.entities.where({ id }).first();
  }
  public async insert(item: T): Promise<T> {
    const [result] = <T[]>await this.entities.insert(item).returning<T>('*');
    return result;
  }
  public async insertMany(items: T[]): Promise<T[]> {
    return <T[]>await this.entities.insert(items).returning<T[]>('*');
  }
  public async update(id: number, item: T): Promise<T> {
    const [result] = <T[]>(
      await this.entities.where({ id }).update(item).returning<T>('*')
    );
    return result;
  }
  public async delete(id: number): Promise<T> {
    const [result] = <T[]>(
      await this.entities.where({ id }).del().returning<T>('*')
    );
    return result;
  }

  public asQueryable(): Knex.QueryInterface {
    return this.entities;
  }
}
