import { Knex } from 'knex';
import { Service } from 'typedi';

import Employee from '@models/Employee';
import IAsyncRepository from '@interfaces/IAsyncRepository';
import IUnitOfWork from '@interfaces/IUnitOfWork';
import BaseRepository from './BaseRepository';
import KnexService from 'services/KnexService';

@Service()
export default class UnitOfWork implements IUnitOfWork {
  private readonly context: Knex.Transaction;
  private readonly employeesRepository: IAsyncRepository<Employee>;

  constructor(knex: KnexService) {
    this.context = knex.context;

    this.employeesRepository = new BaseRepository<Employee>(
      this.context,
      nameof<Employee>()
    );
  }

  public get Employees(): IAsyncRepository<Employee> {
    return this.employeesRepository;
  }

  async commit(): Promise<void> {
    await this.context.commit();
  }
  async rollback(): Promise<void> {
    await this.context.rollback();
  }
}
