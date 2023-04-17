import {NextFunction, Request, Response} from 'express';
import {userSchema} from '../helpers/ZodSchemas';

export default class validations {
  static CreateRequestUserBody(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    userSchema.parse(req.body);
    next();
  }
}
