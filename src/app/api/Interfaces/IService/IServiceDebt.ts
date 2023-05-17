import ICreateDebt, {IUpdateDebt} from '../ICreate/ICreateDebt';

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
  create(newDebt: ICreateDebt): Promise<M>;

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
  update(updateDebt: IUpdateDebt): Promise<M>;

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
  payDebt(debtId: number, userInfo: IUpdateDebt): Promise<M>;

  /**
   * Implemente esse método para encontrar todos os débitos do usuário
   * @param userInfo - payload do jwt
   * @example
      {
        user: payload do jwt
      }
    @returns Débitos do usuário
   */
  findAll(userInfo: IUpdateDebt): Promise<M[]>;

  /**
   * Implemente esse método para encontrar todos débito pago pelo usuário
   * @param userInfo - payload do jwt
   * @example
      {
        user: payload do jwt
      }
   * @returns Débitos pago pelo usuário
   */
  findAllPayed(userInfo: IUpdateDebt): Promise<M[]>;

  /**
   * Implemente esse método para encontrar todos débito não pago pelo usuário
   * @param userInfo - payload do jwt
   * @example
      {
        user: payload do jwt
      }
    @returns Débitos não pago pelo usuário
   */
  findAllUnPayed(userInfo: IUpdateDebt): Promise<M[]>;
}
