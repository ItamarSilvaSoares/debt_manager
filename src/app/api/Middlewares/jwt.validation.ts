import {NextFunction, Request, Response} from 'express';

import Jwt from '../helpers/Jwt';
class jwtValidation {
  public static validate(req: Request, _res: Response, next: NextFunction) {
    const data = Jwt.verifyToken(req.headers.authorization);
    req.body.user = data;
    next();
  }
}

export default jwtValidation;
