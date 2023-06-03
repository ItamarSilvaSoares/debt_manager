import {INTEGER, Model, STRING} from 'sequelize';
import db from '.';

// import OtherModel from './OtherModel';

class ExtraInfosDebit extends Model {
  declare readonly id: number;
  declare debitId: number;
  declare to: string;
  declare scannableLines: string;
}

ExtraInfosDebit.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    debitId: {
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
    modelName: 'extra_infos_debit',
    timestamps: false,
    freezeTableName: true,
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

export default ExtraInfosDebit;
