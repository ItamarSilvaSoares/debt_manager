import {NextFunction, Request, Response} from 'express';
import {
  loginSchema,
  userSchema,
  userUpdateSchema,
  debitCreateSchema,
  debitUpdateSchema,
} from '../helpers/ZodSchemas';

export default class BodyValidationsClass {
  static CreateRequestUserBody(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    userSchema.parse(req.body);
    next();
  }

  static LoginRequestUserBody(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    loginSchema.parse(req.body);
    next();
  }

  static UpdateRequestUserBody(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    userUpdateSchema.parse(req.body);
    next();
  }

  static CreateRequestDebitBody(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    debitCreateSchema.parse(req.body);
    next();
  }

  static UpdateRequestDebitBody(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    debitUpdateSchema.parse(req.body);
    next();
  }
}
