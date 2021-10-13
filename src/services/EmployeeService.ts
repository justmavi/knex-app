import { Service } from 'typedi';
import { Knex } from 'knex';

@Service()
export default class EmployeeService {
  constructor(private readonly knex: Knex) {}
}
