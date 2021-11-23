import Model from '@abstractions/Model';
import { v4 as uuid } from 'uuid';

export default class User extends Model<string> {
  public userName: string;
  public email: string;
  public password: string;
  public resetPasswordToken: string;

  constructor() {
    super();

    this.id = uuid();
  }
}
