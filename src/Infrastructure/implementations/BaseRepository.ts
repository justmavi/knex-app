import { Knex } from 'knex';
import IAsyncRepository from '../../domain/interfaces/IAsyncRepository'

// export class BaseRepository<T> implements IAsyncRepository<T> {
//   private readonly context;
//   private readonly entities;

//   constructor (context: Knex.Transaction) {
//     this.context = context;
//     this.entities = context<T>();
//   }
// }