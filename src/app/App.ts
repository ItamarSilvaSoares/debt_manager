import 'express-async-errors';
import express from 'express';

import ErrorHandler from './api/Middlewares/ErrorHandle';
import routers from './api/Routes/routes';

class App {
  public app: express.Express;
  constructor() {
    this.app = express();
    this.initAuthHeader();
    this.initRoutes();
    this.initMiddlewares();
  }

  private initAuthHeader(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initMiddlewares(): void {
    this.app.use(ErrorHandler.handle);
  }

  private initRoutes(): void {
    this.app.use(routers);
  }
}

export default new App().app;
