import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

class ErrorHandler {
  public static handle(err: Error, _req: Request, res: Response) {
    if (err instanceof Error && err.stack) {
      return res.status(Number(err.stack)).json({message: err.message});
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: err.message});
  }
}

export default ErrorHandler;
