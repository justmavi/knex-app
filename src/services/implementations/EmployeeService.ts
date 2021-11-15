import { Knex } from 'knex';
import { Service } from 'typedi';

@Service()
export default class EmployeeService {
  constructor(private readonly knex: Knex.Transaction) {}

  
}

