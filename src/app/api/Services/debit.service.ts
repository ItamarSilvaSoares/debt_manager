import {ModelStatic} from 'sequelize';
import {StatusCodes} from 'http-status-codes';
import CustomError from '../Errors/CustomError';

import Debit from '../Database/Models/Debit';
import ExtraInfosDebit from '../Database/Models/ExtraInfosDebit';
import DebitType from '../Database/Models/DebitType';
import IServiceDebit from '../Interfaces/IService/IServiceDebit';
import ICreateDebit from '../Interfaces/ICreate/ICreateDebit';
import IJwt from '../Interfaces/IJwt';

class DebitService implements IServiceDebit<Debit> {
  private modelExtraInfo: ModelStatic<ExtraInfosDebit> = ExtraInfosDebit;
  constructor(private model: ModelStatic<Debit> = Debit) {}

  private async findUnique(
    valueToFind: string | number,
    proprietyUnique: string
  ): Promise<Debit | null> {
    return this.model.findOne({
      where: {[proprietyUnique]: valueToFind},
      include: [
        {
          model: ExtraInfosDebit,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
        {
          model: DebitType,
          as: 'debitType',
          attributes: {exclude: ['id']},
        },
      ],
    });
  }

  async create(newDebit: ICreateDebit): Promise<Debit | null> {
    const {user: userInfo, extraInfos: debitInfo, ...data} = newDebit;
    const debit = await this.model.create(
      {...data, userId: userInfo.id},
      {raw: true}
    );
    if (debitInfo) {
      await this.modelExtraInfo.create({...debitInfo, debitId: debit.id});
    }
    return this.findUnique(debit.id, 'id');
  }

  async update(
    updateDebit: Partial<Omit<ICreateDebit, 'id' | 'userId'>>,
    idDebit: string
  ): Promise<Debit | null> {
    const {user: userInfo, extraInfos: debitInfo, ...data} = updateDebit;

    if (userInfo) {
      await this.model.update(
        {...data},
        {where: {$and: {id: idDebit, userId: userInfo.id}}}
      );
    }

    if (debitInfo) {
      await this.modelExtraInfo.update(
        {...debitInfo},
        {where: {debitId: idDebit}}
      );
    }

    return this.findUnique(Number(idDebit), 'id');
  }

  async payDebit(debitId: string, userInfo: IJwt): Promise<Debit | null> {
    const {id} = userInfo;
    await this.model.update(
      {payed: true},
      {where: {$and: {id: debitId, userId: id}}}
    );

    return this.findUnique(Number(debitId), 'id');
  }

  findAll(userInfo: IJwt): Promise<Debit[]> {
    return this.model.findAll({
      where: {userId: userInfo.id},
      include: [
        {
          model: ExtraInfosDebit,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
        {
          model: DebitType,
          as: 'debitType',
          attributes: {exclude: ['id']},
        },
      ],
    });
  }

  findAllPayedUnPayed(userInfo: IJwt, status: boolean): Promise<Debit[]> {
    return this.model.findAll({
      where: {$and: {userId: userInfo.id, payed: status}},
      include: [
        {
          model: ExtraInfosDebit,
          as: 'debtsInfo',
          attributes: {exclude: ['id']},
        },
        {
          model: DebitType,
          as: 'debitType',
          attributes: {exclude: ['id']},
        },
      ],
    });
  }
}

export default new DebitService();
export {DebitService};
