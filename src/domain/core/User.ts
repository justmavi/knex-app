import Model from '@abstractions/Model';

export default class User extends Model<string> {
  public userName: string;
  public email: string;
  public password: string;
  public resetPasswordToken: string;
}
