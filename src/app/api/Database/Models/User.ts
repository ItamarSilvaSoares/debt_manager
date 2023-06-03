import {INTEGER, Model, STRING} from 'sequelize';
import db from '.';
import Debit from './Debit';

class User extends Model {
  declare readonly id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare cell: string;
}

User.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    cell: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'User',
    timestamps: false,
  }
);

Debit.belongsTo(User, {foreignKey: 'id', as: 'user'});

User.hasMany(Debit, {foreignKey: 'userId', as: 'debts'});

export default User;
