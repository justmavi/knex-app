export default class ArgumentError extends Error {
  constructor(message: string, public readonly argument: string) {
    super(`${message}. Argument: ${argument}`);
  }
}
