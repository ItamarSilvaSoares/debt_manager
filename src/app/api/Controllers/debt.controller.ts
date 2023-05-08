import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

import debtService from '../Services/debt.service';

class DebtController {
  private debtService = debtService;
  async find(req: Request, res: Response) {
    console.log('Controller');

    const result = await this.debtService.getAll();
    res.status(StatusCodes.OK).json(result);
  }
}

export default new DebtController();
