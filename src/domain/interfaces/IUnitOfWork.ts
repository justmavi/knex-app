import IRepository from '@interfaces/IRepository';
import User from '@models/User';

export default interface IUnitOfWork {
  Users: IRepository<User>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
}
