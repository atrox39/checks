import { DataSource } from 'typeorm';
import path from 'path';

export const datasource: DataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: 3306,
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS ?? '',
  database: process.env.DB_NAME ?? 'test',
  logging: true,
  synchronize: true,
  entities: [
    path.join(__dirname, 'entity', '*.entity.{ts,js}')
  ],
});

datasource.initialize();
