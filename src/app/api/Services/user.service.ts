import {ModelStatic} from 'sequelize';
import User from '../Database/Models/User';
import ICreateUser, {IUpdateUser} from '../Interfaces/ICreate/ICreateUser';
import Bcryptjs from '../helpers/Bcryptjs';
import CustomError from '../Errors/CustomError';
import {ErrosUserMensagens, userMessages} from '../Utils/Constants';
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

  async update(updateUser: IUpdateUser): Promise<User | null> {
    const {user} = updateUser;
    delete updateUser.user;

    if ('email' in updateUser && user) {
      const userInDb = await this.findUnique(user.id, 'email');
      if (userInDb) {
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

    if (user) {
      await this.model.update({...updateUser}, {where: {id: user.id}});

      return this.findUnique(user.id, 'id');
    }

    return null;
  }

  async delete(userInfo: IUpdateUser): Promise<string | null> {
    const {user} = userInfo;
    if (user) {
      await this.model.destroy({where: {id: user.id}});
      return userMessages.deleteUser;
    }
    return null;
  }
}

export default new UserService(User);
export {UserService};
