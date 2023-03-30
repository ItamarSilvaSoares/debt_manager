import {Options} from 'sequelize';
import {db} from '../../Environments/dotenv';

const config: Options = {
  username: db.DB_USER,
  password: db.DB_PASS,
  database: db.DB_NAME,
  host: db.DB_HOST,
  port: db.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
