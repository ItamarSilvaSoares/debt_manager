import {INTEGER, Model, STRING} from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class DebtType extends Model {
  declare readonly id: number;
  declare type: string;
}

DebtType.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    type: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'debts_types',
    timestamps: false,
  }
);

/**
 * `Workaround` para aplicar as associations em TS:
 * Associations 1:N devem ficar em uma das instâncias de modelo
 * */

// OtherModel.belongsTo(Debt, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Debt, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Debt.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Debt.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default DebtType;
