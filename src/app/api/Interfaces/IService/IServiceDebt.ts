import ICreateDebt, {IUpdateDebt} from '../ICreate/ICreateDebt';
import IJwt from '../IJwt';

/**
 * Interface responsável por regras de serviços User
 * @argument M modelo de saída
 */
export default interface IServiceDebt<M> {
  /**
   * Implemente esse método para criar um novo
   * debito, seu retorno deve ser como exemplo abaixo
   * @param newDebt - deve conter dados de criação de um novo debito
   * @example
      {
        userId: number,
        type: number,
        value: number,
        description: string,
        dueDate: Date,
        payed: boolean,
        user: payload do jwt
      }
   *  @returns Novo debito
   */
  create(newDebt: ICreateDebt): Promise<M | null>;

  /**
   * Implemente esse método para atualizar um
   * debito, seu retorno deve ser como exemplo abaixo
   * @param debtId - Id do debito
   * @param updateDebt - deve conter informação novas para ser atualizado
   * @example
      {
        type: number;
        value: number;
        description: string;
        dueDate: Date;
        payed: boolean;
        user: payload do jwt
      }
    @returns Debito atualizado
   */
  update(updateDebt: IUpdateDebt, idDebt: string): Promise<M | null>;

  /**
   * Implemente esse método para atualizar um debito como pago
   * @param debtId - Id do debito
   * @example
   * {
   * debtId: number,
   * }
   * @param userInfo - payload do jwt
   * @example
      {
        user: payload do jwt
      }
   *
   * @returns Deve retornar o debito atualizado
   */
  payDebt(debtId: string, userInfo: IJwt): Promise<M | null>;

  /**
   * Implemente esse método para encontrar todos os débitos do usuário
   * @param userInfo - payload do jwt
   * @example
      {
        user: payload do jwt
      }
    @returns Débitos do usuário
   */
  findAll(userInfo: IJwt): Promise<M[]>;

  /**
   * Implemente esse método para encontrar todos débito pago pelo usuário
   * @param userInfo - payload do jwt
   * @example
      {
        user: payload do jwt
      }
   * @returns Débitos pago ou não pago pelo usuário
   */
  findAllPayedUnPayed(userInfo: IJwt, status: boolean): Promise<M[]>;
}
