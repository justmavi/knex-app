import IdentityResult from '@models/IdentityResult';

export default interface ITUserService<TUser> {
  create(user: TUser, password: string): Promise<IdentityResult>;
  delete(user: TUser): Promise<IdentityResult>;
  edit(user: TUser): Promise<IdentityResult>;

  block(user: TUser): Promise<IdentityResult>;
  unblock(user: TUser): Promise<IdentityResult>;

  createPasswordResetHash(forUser: TUser): Promise<string>;
  applyPasswordResetHash(hash: string, newPassword: string);
}
