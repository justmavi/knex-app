import IdentityError from '@errors/IdentityError';

export default class IdentityResult {
  public static get success(): IdentityResult {
    const result = new IdentityResult();
    result.succeeded = true;

    return result;
  }

  public static Failure(errors: Array<IdentityError>): IdentityResult {
    const result = new IdentityResult();

    result.succeeded = false;
    result.errors = errors;

    return result;
  }

  public succeeded: boolean;
  public errors: Array<IdentityError>;
}
