import 'dotenv/config';

const env = (process.env.ENVIRONMENT || 'dev') as keyof typeof suffix;

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
  production: '-prod',
  prod: '-prod',
};

console.log(process.env.DB_NAME);

export const db = {
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || 'password',
  DB_NAME: `${process.env.DB_NAME}${suffix[env] || suffix.test}`,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 3306,
};
