import bcrypt from 'bcrypt';
import { Inject, Service } from 'typedi';

import IdentityError from '@errors/IdentityError';
import IUnitOfWork from '@interfaces/IUnitOfWork';
import IdentityResult from '@models/IdentityResult';
import User from '@models/User';
import IUserService from '@services/interfaces/IUserService';
import EnvironmentError from '@errors/EnvironmentError';
import { DBError, UniqueViolationError, wrapError } from 'db-errors';
import IdentityErrorGenerator from '@utils/IdentityErrorGenerator';
import ArgumentNullError from '@errors/ArgumentNullError';

@Service()
export default class UserService implements IUserService<User> {
  private readonly unitOfWork: IUnitOfWork;

  constructor(@Inject() unitOfWork: IUnitOfWork) {
    this.unitOfWork = unitOfWork;
  }

  async create(user: User, password: string): Promise<IdentityResult> {
    const rounds = parseInt(process.env.PASSWORD_HASH_ROUNDS as string);

    if (isNaN(rounds)) {
      throw new EnvironmentError('Not a number', 'PASSWORD_HASH_ROUNDS');
    }

    try {
      user.passwordHash = await bcrypt.hash(password, rounds);

      await this.unitOfWork.Users.insert(user);

      return IdentityResult.success;
    } catch (exception) {
      const error: DBError = wrapError(exception as Error);
      const identityErrors: Array<IdentityError> = [];

      if (error instanceof UniqueViolationError) {
        identityErrors.push(IdentityErrorGenerator.UserAlreadyExists);
      }

      return IdentityResult.failure(identityErrors);
    }
  }
  async delete(user: User): Promise<IdentityResult> {
    if (!user) {
      throw new ArgumentNullError('user');
    }

    const errors: Array<IdentityError> = [];

    try {
      const deletedUser: User = await this.unitOfWork.Users.delete(user);

      if (!deletedUser) {
        errors.push(IdentityErrorGenerator.UserNotFound);
        return IdentityResult.failure(errors);
      }

      return IdentityResult.success;
    } catch (exception) {
      errors.push(IdentityErrorGenerator.UnexpectedError);

      return IdentityResult.failure(errors);
    }
  }
  async edit(user: User): Promise<IdentityResult> {
    if (!user) {
      throw new ArgumentNullError('user');
    }

    const errors: Array<IdentityError> = [];

    try {
      const updatedUser = await this.unitOfWork.Users.update(user);

      if (!updatedUser) {
        errors.push(IdentityErrorGenerator.UserNotFound);
        return IdentityResult.failure(errors);
      }

      return IdentityResult.success;
    } catch (exception) {
      const error: DBError = wrapError(exception as Error);

      if (error instanceof UniqueViolationError) {
        errors.push(IdentityErrorGenerator.UserAlreadyExists);
      }

      return IdentityResult.failure(errors);
    }
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
