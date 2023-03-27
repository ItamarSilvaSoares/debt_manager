import {ModelStatic} from 'sequelize';
import User from '../Database/Models/User';

class Service {
  protected readonly model: ModelStatic<User> = User;

  async findAll() {
    return this.model.findAll();
  }
}

export default new Service();
export {Service};
