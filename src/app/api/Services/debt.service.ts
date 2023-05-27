import {ModelStatic} from 'sequelize';
import {StatusCodes} from 'http-status-codes';
import CustomError from '../Errors/CustomError';

import Debt from '../Database/Models/Debt';
import ExtraInfosDebt from '../Database/Models/ExtraInfosDebt';
import DebtType from '../Database/Models/DebtType';
import IServiceDebt from '../Interfaces/IService/IServiceDebt';
import ICreateDebt from '../Interfaces/ICreate/ICreateDebt';
import IJwt from '../Interfaces/IJwt';

class DebtService implements IServiceDebt<Debt> {
  private modelExtraInfo: ModelStatic<ExtraInfosDebt> = ExtraInfosDebt;
  constructor(private model: ModelStatic<Debt>) {}

  private async findUnique(
    valueToFind: string | number,
    proprietyUnique: string
  ): Promise<Debt | null> {
    return this.model.findOne({
      where: {[proprietyUnique]: valueToFind},
      include: [
        {
          model: ExtraInfosDebt,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
        {
          model: DebtType,
          as: 'debtType',
          attributes: {exclude: ['id']},
        },
      ],
    });
  }

  async create(newDebt: ICreateDebt): Promise<Debt | null> {
    const {user: userInfo, extraInfos: debtInfo, ...data} = newDebt;
    const debt = await this.model.create(
      {...data, userId: userInfo.id},
      {raw: true}
    );
    if (debtInfo) {
      await this.modelExtraInfo.create({...debtInfo, debtId: debt.id});
    }
    return this.findUnique(debt.id, 'id');
  }

  async update(
    updateDebt: Partial<Omit<ICreateDebt, 'id' | 'userId'>>,
    idDebt: string
  ): Promise<Debt | null> {
    const {user: userInfo, extraInfos: debtInfo, ...data} = updateDebt;

    if (userInfo) {
      await this.model.update(
        {...data},
        {where: {$and: {id: idDebt, userId: userInfo.id}}}
      );
    }

    if (debtInfo) {
      await this.modelExtraInfo.update(
        {...debtInfo},
        {where: {debtId: idDebt}}
      );
    }

    return this.findUnique(Number(idDebt), 'id');
  }
  async payDebt(debtId: string, userInfo: IJwt): Promise<Debt | null> {
    const {id} = userInfo;
    await this.model.update(
      {payed: true},
      {where: {$and: {id: debtId, userId: id}}}
    );

    return this.findUnique(Number(debtId), 'id');
  }

  findAll(userInfo: IJwt): Promise<Debt[]> {
    return this.model.findAll({
      where: {userId: userInfo.id},
      include: [
        {
          model: ExtraInfosDebt,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
        {
          model: DebtType,
          as: 'debtType',
          attributes: {exclude: ['id']},
        },
      ],
    });
  }

  findAllPayedUnPayed(userInfo: IJwt, status: boolean): Promise<Debt[]> {
    return this.model.findAll({
      where: {$and: {userId: userInfo.id, payed: status}},
      include: [
        {
          model: ExtraInfosDebt,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
        {
          model: DebtType,
          as: 'debtType',
          attributes: {exclude: ['id']},
        },
      ],
    });
  }
}

export default new DebtService(Debt);
export {DebtService};
