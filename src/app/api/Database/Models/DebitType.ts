import {INTEGER, Model, STRING} from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class DebitType extends Model {
  declare readonly id: number;
  declare type: string;
}

DebitType.init(
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

// OtherModel.belongsTo(Debit, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Debit, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Debit.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Debit.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default DebitType;
