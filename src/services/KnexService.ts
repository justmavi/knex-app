import { Knex } from 'knex';
import { Service } from 'typedi';
import knex from '@data/knex/knex';

@Service()
export default class KnexService {
  private _context: Knex.Transaction;

  public get context(): Knex.Transaction {
    return this._context;
  }

  constructor() {
    this.setup(); // no way to call asynchronous
  }

  private async setup() {
    this._context = await knex.transaction();
  }
}
