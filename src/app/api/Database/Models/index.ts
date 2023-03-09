import {Sequelize} from 'sequelize';
import * as config from '../Config/database';

const sequelize = new Sequelize(config);

export default sequelize;
