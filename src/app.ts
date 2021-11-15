import 'reflect-metadata';

import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { Knex } from 'knex';
import { Container } from 'typedi';

import knex from '@data/knex/knex';
import UnitOfWork from '@implementations/UnitOfWork';
import IUnitOfWork from '@interfaces/IUnitOfWork';
import Employee from '@models/Employee';

dotenv.config();

const { APP_PORT, APP_HOST } = process.env;

const app = express();

const port: number = +(APP_PORT as string);
const host: string = APP_HOST as string;

const main = async (): Promise<void> => {
  const context: Knex.Transaction = await knex.transaction();
  Container.set('context', context);

  Container.get<IUnitOfWork>(UnitOfWork);

  app.listen(port, host, () => {
    console.log('Now listening port', port);
  });
};

void main();
