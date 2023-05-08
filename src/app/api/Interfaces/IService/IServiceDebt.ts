import ICreateUser, {IUpdateUser} from '../ICreate/ICreateUser';

/**
 * Interface responsável por regras de serviços User
 * @argument M modelo de saída
 */
export default interface IServiceDebt<M> {
  /**
   * Implemente esse método para criar um novo
   * usuário, seu retorno deve ser como exemplo abaixo
   * @param newUser - deve conter dados de criação
   * @example
      {
        id: 1;
        username: 'user_one';
        email: 'user@user';
        cell: 99999999999;
        password: 'XXXXXX';
      }
   *  @returns Novo usuário criado
   */
  create(newUser: ICreateUser): Promise<M | null>;

  /**
   * Implemente esse método para atualizar um
   * usuário, seu retorno deve ser como exemplo abaixo
   * @param userId - Id do usuário
   * @param updateUser - deve conter informação novas para ser atualizado
   * @example
      {
        username: 'user_one';
        email: 'user@user';
        cell: 00000000000;
        password: 'XXXXXX';
        user: payload do jwt
      }
   */
  update(updateUser: IUpdateUser): Promise<M | null>;

  /**
   * Implemente esse método para deletar um
   * usuário
   * @param userInfo - deve conter informação novas para ser atualizado
   * @returns Deletado com sucesso ou null se não tiver autenticado
   *
   * @example
      {
        user: payload do jwt
      }
   */
  delete(userInfo: IUpdateUser): Promise<string | null>;
}