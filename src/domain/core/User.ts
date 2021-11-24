import { v4 as uuid } from 'uuid';

import Model from '@abstractions/Model';

export default class User extends Model<string> {
  public name: string;
  public email: string;
  public passwordHash: string;

  constructor() {
    super();

    this.id = uuid();
  }
}
