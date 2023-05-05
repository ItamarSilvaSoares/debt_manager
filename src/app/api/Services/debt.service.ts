import {ModelStatic} from 'sequelize';
import {StatusCodes} from 'http-status-codes';
import CustomError from '../Errors/CustomError';

import Debt from '../Database/Models/Debt';

class DebtService {
  constructor(private model: ModelStatic<Debt>) {}

  public async getAll() {
    const result = await this.model.findAll();
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
