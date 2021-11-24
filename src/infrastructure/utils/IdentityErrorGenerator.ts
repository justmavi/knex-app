import IdentityError from '@errors/IdentityError';
import { IdentityErrorCodes } from '@constants/IdentityErrorCodes';

export default class IdentityErrorGenerator {
  public static get UserAlreadyExists(): IdentityError {
    return <IdentityError>{
      code: IdentityErrorCodes.USER_ALREADY_EXIST,
      description:
        'User with inputed username or email already exist in the system',
    };
  }

  public static get UserNotFound(): IdentityError {
    return <IdentityError>{
      code: IdentityErrorCodes.USER_DOES_NOT_EXIST,
      description: 'User does not exist',
    };
  }

  public static get UnexpectedError(): IdentityError {
    return <IdentityError>{
      code: IdentityErrorCodes.UNEXPECTED_ERROR,
      description: 'Unexpected Error',
    };
  }
}
