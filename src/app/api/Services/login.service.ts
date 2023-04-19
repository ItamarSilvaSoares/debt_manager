import {ModelStatic} from 'sequelize';
import {StatusCodes} from 'http-status-codes';

import Jwt from '../helpers/Jwt';
import Bcryptjs from '../helpers/Bcryptjs';
import CustomError from '../Errors/CustomError';
import ILogin from '../Interfaces/ILogin';
import User from '../Database/Models/User';

import {ErrosLogin} from '../Utils/Constants';

class LoginService {
  protected model: ModelStatic<User> = User;

  async login(objLogin: ILogin) {
    const user = await this.findOne(objLogin.email);

    if (!user || !Bcryptjs.compareHash(objLogin.password, user.password)) {
      throw new CustomError(
        StatusCodes.UNAUTHORIZED,
        ErrosLogin.erroLogin,
        'fail login'
      );
    }

    const {password: _, ...data} = user;

    return Jwt.createToken(data);
  }

  async findOne(email: string) {
    return this.model.findOne({where: {email}, raw: true});
  }
}

export default new LoginService();
