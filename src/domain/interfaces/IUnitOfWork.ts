import IRepository from '@interfaces/IRepository';
import Employee from '@models/Employee';

export default interface IUnitOfWork {
  Employees: IRepository<Employee>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
}
