export default class EnvironmentError extends Error {
  constructor(message: string, public readonly variable: string) {
    super(`${message}. Variable: ${variable}`);
  }
}
