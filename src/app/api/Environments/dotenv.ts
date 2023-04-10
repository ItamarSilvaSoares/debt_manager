import 'dotenv/config';
import {Suffix} from '../Utils/Constants';

const env = (process.env.NODE_ENV || 'dev') as keyof typeof Suffix;

export const db = {
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || 'password',
  DB_NAME: `${process.env.DB_NAME}${Suffix[env] || Suffix.test}`,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 3306,
};

export const jwt = {
  secret: process.env.JWT_SECRET || 'jwt_secret',
};
