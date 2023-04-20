import {Request, Response} from 'express';
import IServiceUser from '../Interfaces/IService/IServiceUser';
import User from '../Database/Models/User';
import {StatusCodes} from 'http-status-codes';
import userService from '../Services/user.service';

class UserController {
  protected service: IServiceUser<User>;

  constructor(service: IServiceUser<User>) {
    this.service = service;
  }

  async create(req: Request, res: Response): Promise<Response> {
    const result = await this.service.create(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const result = await this.service.update(req.body);
    return res.status(StatusCodes.OK).json(result);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const result = await this.service.delete(req.body);
    return res.status(StatusCodes.OK).json({message: result});
  }
}

export default new UserController(userService);
export {UserController};
