import { Inject, Service } from 'typedi';

import Model from '@abstractions/Model';
import IUnitOfWork from '@interfaces/IUnitOfWork';
import IUserService from '@services/interfaces/IUserService';

@Service()
export default class UserService<T extends Model<string>>
  implements IUserService<T>
{
  constructor(private readonly unitOfWork: IUnitOfWork) {}
  create(user: T, password: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(user: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  edit(user: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  block(user: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  unblock(user: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  createPasswordResetHash(forUser: T): Promise<string> {
    throw new Error('Method not implemented.');
  }
  applyPasswordResetHash(hash: string, newPassword: string) {
    throw new Error('Method not implemented.');
  }
}
