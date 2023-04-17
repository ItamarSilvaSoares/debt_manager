import {ModelStatic} from 'sequelize';
import User from '../Database/Models/User';
import ILogin from '../Interfaces/ILogin';
import CustomError from '../Errors/CustomError';
import {StatusCodes} from 'http-status-codes';
import {ErrosLogin} from '../Utils/Constants';
import Bcryptjs from '../helpers/Bcryptjs';
import AContractJWT from '../helpers/Jwt';

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

    return AContractJWT.gerarToken(data);
  }

  async findOne(email: string) {
    return this.model.findOne({where: {email}, raw: true});
  }
}

export default new LoginService();
