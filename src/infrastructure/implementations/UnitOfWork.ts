import { Knex } from 'knex';
import { Inject, Service } from 'typedi';

import { TABLE_USER } from '@data/table_names';
import BaseRepository from '@implementations/BaseRepository';
import IRepository from '@interfaces/IRepository';
import IUnitOfWork from '@interfaces/IUnitOfWork';
import User from '@models/User';

@Service()
export default class UnitOfWork implements IUnitOfWork {
  private readonly context: Knex.Transaction;
  private readonly usersRepository: IRepository<User>;

  constructor(@Inject('context') context: Knex.Transaction) {
    this.context = context;

    this.usersRepository = new BaseRepository<User>(context, TABLE_USER);
  }

  public get Users(): IRepository<User> {
    return this.usersRepository;
  }

  async commit(): Promise<void> {
    await this.context.commit();
  }
  async rollback(): Promise<void> {
    await this.context.rollback();
  }
}
