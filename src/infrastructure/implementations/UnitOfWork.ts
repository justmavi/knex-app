import { Knex } from 'knex';
import { Inject, Service } from 'typedi';

import * as TableNames from '@data/table_names';
import BaseRepository from '@implementations/BaseRepository';
import IRepository from '@interfaces/IRepository';
import IUnitOfWork from '@interfaces/IUnitOfWork';
import Employee from '@models/Employee';

@Service()
export default class UnitOfWork implements IUnitOfWork {
  private readonly context: Knex.Transaction;
  private readonly employeesRepository: IRepository<Employee>;

  constructor(@Inject('context') context: Knex.Transaction) {
    this.context = context;

    this.employeesRepository = new BaseRepository<Employee>(
      context,
      TableNames.TABLE_EMPLOYEE
    );
  }

  public get Employees(): IRepository<Employee> {
    return this.employeesRepository;
  }

  async commit(): Promise<void> {
    await this.context.commit();
  }
  async rollback(): Promise<void> {
    await this.context.rollback();
  }
}
