import 'reflect-metadata';
import { config } from 'dotenv';
import express, { Application, Request, Response } from 'express';
import path from 'path';

config();

import './database';
import UserService from './service/user.service';
import ChecadaService from './service/checada.service';
import { HttpService } from './service/http.service';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => res.render('index'));

app.get('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = await HttpService.get(`/products/${id}`);
  return res.json(data);
});

app.get('/api/users', async (req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.status(200).json(users);
});

app.get('/api/checar/:id', async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id, 10);
  const checadas = await ChecadaService.checadasPorUsuario(id);
  res.status(200).json(checadas);
});

app.listen(3000, () => {});
