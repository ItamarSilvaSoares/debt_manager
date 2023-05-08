import {INTEGER, Model, STRING} from 'sequelize';
import db from '.';

// import OtherModel from './OtherModel';

class ExtraInfosDebt extends Model {
  declare readonly id: number;
  declare debtId: number;
  declare to: string;
  declare scannableLines: string;
}

ExtraInfosDebt.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    debtId: {
      type: INTEGER,
      allowNull: false,
    },
    to: {
      type: STRING,
    },
    scannableLines: {
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'extra_infos_debt',
    timestamps: false,
    freezeTableName: true,
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

export default ExtraInfosDebt;
