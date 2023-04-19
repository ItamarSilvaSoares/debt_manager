import {ModelStatic} from 'sequelize';
import User from '../Database/Models/User';
import ICreateUser from '../Interfaces/ICreate/ICreateUser';
import Bcryptjs from '../helpers/Bcryptjs';
import CustomError from '../Errors/CustomError';
import {ErrosUserMensagens} from '../Utils/Constants';
import {StatusCodes} from 'http-status-codes';
import IServiceUser from '../Interfaces/IService/IServiceUser';

class UserService implements IServiceUser<User> {
  protected model: ModelStatic<User>;

  constructor(model: ModelStatic<User>) {
    this.model = model;
  }

  private async findUnique(
    valueToFind: string | number,
    proprietyUnique: string
  ): Promise<User | null> {
    return this.model.findOne({
      where: {[proprietyUnique]: valueToFind},
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async create(newUser: ICreateUser): Promise<User | null> {
    const user = await this.findUnique(newUser.email, 'email');

    if (user) {
      throw new CustomError(
        StatusCodes.CONFLICT,
        ErrosUserMensagens.conflictUser,
        'User conflict'
      );
    }

    const password = Bcryptjs.getHash(newUser.password);

    await this.model.create({...newUser, password});

    return this.findUnique(newUser.email, 'email');
  }

  async update(
    updateUser: Partial<Omit<ICreateUser, 'id'>>,
    userId: number
  ): Promise<User | null> {
    if ('email' in updateUser) {
      const user = await this.findUnique(userId, 'email');
      if (user) {
        throw new CustomError(
          StatusCodes.CONFLICT,
          ErrosUserMensagens.conflictEmail,
          'Invalid Email'
        );
      }
    }

    if ('password' in updateUser) {
      const password = Bcryptjs.getHash(updateUser.password as string);
      updateUser = {...updateUser, password};
    }

    const a = await this.model.update({...updateUser}, {where: {id: userId}});

    console.log(a);

    return this.findUnique(userId, 'id');
  }

  async delete(id: number): Promise<void> {
    await this.model.destroy({where: {id}});
  }
}

export default new UserService(User);
export {UserService};
