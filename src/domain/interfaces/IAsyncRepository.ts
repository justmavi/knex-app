export default interface IAsyncRepository<T> {
  get(predicate: (model: T) => boolean ): Promise<T>
  getAll(): Promise<T>;
  getById(id: number): Promise<T>;
  insert(item: T): Promise<void>;
  insertMany(items: T[]): Promise<void>;
  update(item: T): Promise<void>;
  delete(item: T): Promise<void>;
}