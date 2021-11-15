export default interface ITUserService<TUser> {
  create(user: TUser, password: string): Promise<TUser>;
  delete(user: TUser): Promise<TUser>;
  edit(user: TUser): Promise<TUser>;

  block(user: TUser): Promise<TUser>;
  unblock(user: TUser): Promise<TUser>;

  createPasswordResetHash(forUser: TUser): Promise<string>;
  applyPasswordResetHash(hash: string, newPassword: string);
}
