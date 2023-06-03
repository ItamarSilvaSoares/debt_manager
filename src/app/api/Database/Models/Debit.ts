import {INTEGER, Model, STRING, DECIMAL, DATE, BOOLEAN} from 'sequelize';
import DebitType from './DebitType';
import DebtsInfo from './ExtraInfosDebit';
import db from '.';

class Debit extends Model {
  declare readonly id: number;
  declare userId: number;
  declare type: number;
  declare value: number;
  declare description: string;
  declare dueDate: Date;
  declare payed: boolean;
}

Debit.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: INTEGER,
      allowNull: false,
    },
    value: {
      type: DECIMAL,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    dueDate: {
      type: DATE,
      allowNull: false,
    },
    payed: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Debit',
    timestamps: false,
  }
);

DebitType.belongsTo(Debit, {foreignKey: 'type', as: 'debit'});
DebtsInfo.belongsTo(Debit, {foreignKey: 'id', as: 'infoDebit'});

Debit.hasOne(DebitType, {foreignKey: 'id', as: 'debitType'});
Debit.hasOne(DebtsInfo, {foreignKey: 'id', as: 'debtsInfo'});

export default Debit;
