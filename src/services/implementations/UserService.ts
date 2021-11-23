import bcrypt from 'bcrypt';
import { Inject, Service } from 'typedi';

import IdentityError from '@errors/IdentityError';
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

  async create(user: User, password: string): Promise<IdentityResult> {
    const rounds = parseInt(process.env.PASSWORD_HASH_ROUNDS as string);

    if (isNaN(rounds)) {
      throw new TypeError('PASSWORD_HASH_ROUNDS is not a number');
    }

    try {
      const passwordHash = await bcrypt.hash(password, rounds);
      user.password = passwordHash;

      const createdUser = await this.unitOfWork.Users.insert(user);
      user.password = password;

      return IdentityResult.success;
    } catch (exception) {
      return IdentityResult.failure(new Array<IdentityError>());
    }
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
