import {NextFunction, Request, Response} from 'express';

import Jwt from '../helpers/Jwt';
class jwtValidation {
  public static async validate(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    const data = await Jwt.verifyToken(req.headers.authorization);
    req.body.user = data;
    next();
  }
}

export default jwtValidation;
