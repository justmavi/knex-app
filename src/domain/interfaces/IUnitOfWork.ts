export default interface IUnitOfWork {
  commit(): void,
  rollback(): void
}