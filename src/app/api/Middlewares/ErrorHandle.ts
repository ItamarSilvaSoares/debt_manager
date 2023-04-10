/* eslint-disable @typescript-eslint/no-unused-vars */
import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import CustomError from '../Errors/CustomError';
import {ZodError} from 'zod';

class ErrorHandler {
  public static handle(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    if (err instanceof CustomError && err.stack) {
      return res.status(Number(err.stack)).json({message: err.message});
    }
    if (err instanceof ZodError) {
      const [erro] = err.issues;
      const [key] = erro.path;

      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({message: `${key}: ${erro.message}`});
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: err.message});
  }
}

export default ErrorHandler;
