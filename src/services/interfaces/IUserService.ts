import { User } from '@models/User';

export default interface IUserService {
  create(user: User, password: string): Promise<User>;
  delete(user: User): Promise<User>;
  edit(user: User): Promise<User>;

  block(user: User): Promise<User>;
  unblock(user: User): Promise<User>;

  createPasswordResetHash(forUser: User): Promise<string>;
  applyPasswordResetHash(hash: string, newPassword: string);
}
