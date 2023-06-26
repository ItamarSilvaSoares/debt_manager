import ExtraInfosDebit from '../../Database/Models/ExtraInfosDebit';
import IJwt from '../IJwt';

/**
 * Interface responsável por definir um padrão para criar um novo debito
 * @example
      {
        id: 1;
        userId: 1;
        type: 2;
        value: 150.00;
        description: String;
        dueDate: 2023-02-23;
        payed: True;
        user: jwt payload;
        extraInfos?: {
          to: string,
          scannableLines: string
        }
      }
  @argument userId - id do usuário pertencente do debito
  @argument type - id do tipo de debito
  @argument type - valor do debito
  @argument description - descrição do debito
  @argument dueDate - data de expiração do debito
  @argument payed - boolean to verificar se o debito foi pago
  @argument user - boolean to verificar se o debito foi pago
 */
export default interface ICreateDebit {
  id?: number;
  userId: number;
  type: number;
  value: number;
  description: string;
  dueDate: string;
  payed?: boolean;
  user: IJwt;
  extraInfos?: ExtraInfosDebit;
}

export type IUpdateDebit = Partial<Omit<ICreateDebit, 'id'>>;
