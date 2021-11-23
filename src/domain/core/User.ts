import { v4 as uuid } from 'uuid';

import Model from '@abstractions/Model';

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
