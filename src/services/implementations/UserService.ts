import { Inject, Service } from 'typedi';

import IUnitOfWork from '@interfaces/IUnitOfWork';
import IdentityResult from '@models/IdentityResult';
import User from '@models/User';
import IUserService from '@services/interfaces/IUserService';

@Service()
export default class UserService implements IUserService<User> {
  private readonly unitOfWork: IUnitOfWork;

  constructor(unitOfWork: IUnitOfWork) {
    this.unitOfWork = unitOfWork;
  }

  create(user: User, password: string): Promise<IdentityResult> {
    throw new Error('Method not implemented.');
  }
  delete(user: User): Promise<IdentityResult> {
    throw new Error('Method not implemented.');
  }
  edit(user: User): Promise<IdentityResult> {
    throw new Error('Method not implemented.');
  }
  block(user: User): Promise<IdentityResult> {
    throw new Error('Method not implemented.');
  }
  unblock(user: User): Promise<IdentityResult> {
    throw new Error('Method not implemented.');
  }
  createPasswordResetHash(forUser: User): Promise<string> {
    throw new Error('Method not implemented.');
  }
  applyPasswordResetHash(hash: string, newPassword: string) {
    throw new Error('Method not implemented.');
  }
}
