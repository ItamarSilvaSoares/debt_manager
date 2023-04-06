import {Model, ModelStatic} from 'sequelize';

abstract class Service<U extends Model> {
  protected model: ModelStatic<U>;
  constructor(model: ModelStatic<U>) {
    this.model = model;
  }

  async findAll(): Promise<U[]> {
    return this.model.findAll();
  }

  async findOne(id: number): Promise<U | null> {
    return this.model.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
  }
}

export default Service;
