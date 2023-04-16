/**
 * Interface responsável por definir um padrão para o usuário
 * @example
      {
        id: 1;
        username: 'user_one';
        email: 'user@user';
        cell: 99999999999;
      }
  @arguments username - nome do usuário
 * @augments email - email do usuário
 * @augments cell - celular do usuário
 * @augments password - senha do usuário
 */
export default interface ICreateUser {
  id?: Number;
  username: string;
  email: string;
  cell: string;
  password: string;
}
