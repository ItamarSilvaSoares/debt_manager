import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import IServiceDebit from '../Interfaces/IService/IServiceDebit';

import debitService from '../Services/debit.service';
import Debit from '../Database/Models/Debt';

class DebitController {
  private debitService: IServiceDebit<Debit>;

  constructor(service: IServiceDebit<Debit> = debitService) {
    this.debitService = service;
  }

  async create(req: Request, res: Response) {
    const result = await this.debitService.create(req.body);
    res.status(StatusCodes.CREATED).json(result);
  }

  async update(req: Request, res: Response) {
    const result = await this.debitService.update(req.body, req.params.id);
    res.status(StatusCodes.OK).json(result);
  }

  async payDebit(req: Request, res: Response) {
    const result = await this.debitService.payDebit(
      req.params.id,
      req.body.user
    );
    res.status(StatusCodes.OK).json(result);
  }

  async getAll(req: Request, res: Response) {
    const result = await this.debitService.findAll(req.body.user);
    res.status(StatusCodes.OK).json(result);
  }

  async getAllPayed(req: Request, res: Response) {
    const result = await this.debitService.findAllPayedUnPayed(
      req.body.user,
      true
    );
    res.status(StatusCodes.OK).json(result);
  }

  async getAllUnPayed(req: Request, res: Response) {
    const result = await this.debitService.findAllPayedUnPayed(
      req.body.user,
      false
    );
    res.status(StatusCodes.OK).json(result);
  }
}

export default new DebitController();
