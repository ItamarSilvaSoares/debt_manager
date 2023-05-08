import {ModelStatic} from 'sequelize';
import {StatusCodes} from 'http-status-codes';
import CustomError from '../Errors/CustomError';

import Debt from '../Database/Models/Debt';
import ExtraInfosDebt from '../Database/Models/ExtraInfosDebt';

class DebtService {
  constructor(private model: ModelStatic<Debt>) {}

  public async getAll() {
    console.log('esquilo');

    const result = await this.model.findAll({
      include: [
        {
          model: ExtraInfosDebt,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
      ],
    });
    return result;
  }

  // public async getById(id: string) {
  //   const result = await this.model.findByPk(id);
  //   if (!result) {
  //     throw new CustomError(StatusCodes.NOT_FOUND, 'Not Found');
  //   }
  //   return result;
  // }

  // public async create(data: any) {
  //   const result = await this.model.create(data);
  //   return result;
  // }

  // public async update(id: string, data: any) {
  //   const result = await this.model.update(data, {where: {id}});
  //   if (!result) {
  //     throw new CustomError(StatusCodes.NOT_FOUND, 'Not Found');
  //   }
  //   return result;
  // }

  // public async delete(id: string) {
  //   const result = await this.model.destroy({where: {id}});
  //   if (!result) {
  //   }
  // }
}

export default new DebtService(Debt);
export {DebtService};
