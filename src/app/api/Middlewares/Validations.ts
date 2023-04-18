import {NextFunction, Request, Response} from 'express';
import {loginSchema, userSchema} from '../helpers/ZodSchemas';

export default class validations {
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
}
