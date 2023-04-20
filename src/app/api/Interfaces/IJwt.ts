import ICreateUser from './ICreate/ICreateUser';

export default interface IJwt extends Omit<ICreateUser, 'password'> {
  exp: number;
  id: number;
}
