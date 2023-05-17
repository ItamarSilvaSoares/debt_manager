import ICreateUser, {IUpdateUser} from '../ICreate/ICreateUser';

/**
 * Interface responsável por regras de serviços User
 * @argument M modelo de saída
 */
export default interface IServiceUser<M> {
  /**
   * Implemente esse método para criar um novo
   * usuário, seu retorno deve ser como exemplo abaixo
   * @param newUser - deve conter dados de criação de um novo usuário
   * @example
      {
        username: 'user_one';
        email: 'user@user';
        cell: 99999999999;
        password: 'XXXXXX';
      }
   *  @returns
      {
        id: 1;
        username: 'user_one';
        email: 'user@user';
        cell: 99999999999;
      }
   */
  create(newUser: ICreateUser): Promise<M | null>;

  /**
   * Implemente esse método para atualizar um
   * usuário, seu retorno deve ser como exemplo abaixo
   * @param userId - Id do usuário
   * @param updateUser - deve conter as informação novas para ser atualizado
   * @example
      {
        username: 'user_one';
        email: 'user@user';
        cell: 88888888888;
        password: 'XXXXXX';
      }
    @returns
    {
        username: 'user_one';
        email: 'user@user';
        cell: 88888888888;
      }
   */
  update(updateUser: IUpdateUser): Promise<M | null>;

  /**
   * Implemente esse método para deletar um
   * usuário
   * @param userInfo - deve conter as informação referente ao usuário
   * @example
      {
        user: payload do jwt
      }

   * @returns Deletado com sucesso ou null se não tiver autenticado
   *
   */
  delete(userInfo: IUpdateUser): Promise<string | null>;
}
