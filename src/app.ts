import 'reflect-metadata';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { Container } from 'typedi';
import UnitOfWork from '@implementations/UnitOfWork';
import { Knex } from 'knex';
import knex from '@data/knex/knex';
import Employee from '@models/Employee';
dotenv.config();

const { APP_PORT, APP_HOST } = process.env;

const app = express();

const port = +(APP_PORT as string);
const host = APP_HOST as string;

const main = async () => {
  const context: Knex.Transaction = await knex.transaction();
  Container.set('context', context);

  const test = Container.get(UnitOfWork);

  const employee = new Employee();
  employee.profileId = 7866841;

  const insertedDoc: Employee = await test.Employees.insert(employee);
  console.log('inserted doc: ', insertedDoc.id);

  await test.commit();
  const getInsertedDoc = await test.Employees.getById(4);
  console.log('getInsertedDoc: ', getInsertedDoc);
};

main();

app.listen(port, host, () => {
  console.log('Now listening port 3000');
});

app.get('/', (req: Request, res: Response) => {
  const { id }: { id: string } = req.query as { id: string };
  res.status(200).send(id + 1);
});
