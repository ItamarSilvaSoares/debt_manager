import {INTEGER, Model, STRING, DECIMAL, DATE, BOOLEAN} from 'sequelize';
import DebtType from './DebtType';
import DebtsInfo from './ExtraInfosDebt';
import db from '.';

class Debt extends Model {
  declare readonly id: number;
  declare userId: number;
  declare type: number;
  declare value: number;
  declare description: string;
  declare dueDate: Date;
  declare payed: boolean;
}

Debt.init(
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
      defaultValue: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Debt',
    timestamps: false,
  }
);

DebtType.belongsTo(Debt, {foreignKey: 'type', as: 'typeDebt'});
DebtsInfo.belongsTo(Debt, {foreignKey: 'id', as: 'Debt'});

Debt.hasOne(DebtType, {foreignKey: 'id', as: 'debt'});
Debt.hasOne(DebtsInfo, {foreignKey: 'id', as: 'DebtsInfo'});

export default Debt;
