import IAsyncRepository from '@interfaces/IAsyncRepository';
import Employee from '@models/Employee';

export default interface IUnitOfWork {
  Employees: IAsyncRepository<Employee>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
}
