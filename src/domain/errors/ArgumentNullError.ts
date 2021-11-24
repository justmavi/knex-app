export default class ArgumentNullError extends Error {
  constructor(public readonly argument: string) {
    super(`Argument cannot be null. Argument: ${argument}`);
  }
}
