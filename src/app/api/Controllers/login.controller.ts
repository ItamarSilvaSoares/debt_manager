import {Request, Response} from 'express';
import loginService from '../Services/login.service';
import {StatusCodes} from 'http-status-codes';

class LoginController {
  private service = loginService;

  async login(req: Request, res: Response): Promise<Response> {
    const token = await this.service.login(req.body);
    return res.status(StatusCodes.OK).json({token});
  }
}

export default new LoginController();
