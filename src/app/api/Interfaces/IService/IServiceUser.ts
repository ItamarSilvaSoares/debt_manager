import ICreateUser from '../ICreate/ICreateUser';
import IUpdateUser from '../IUpdate/IUpdateUser';

/**
 * Interface responsável por regras de serviços User
 * @argument M modelo de saída
 */
export default interface IServiceUser<M> {
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
        id: 1;
        username: 'user_one';
        email: 'user@user';
        cell: 00000000000;
      }
   */
  update(updateUser: IUpdateUser, userId: number): Promise<M | null>;

  /**
   * Implemente esse método para deletar um
   * usuário
   * @param id - Id do usuário
   */
  delete(id: number): Promise<void>;
}
