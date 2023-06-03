import express from 'express';

import docRouter from './docRouter';
import userRouter from './userRouter';
import loginRouter from './loginRouter';
import debitRouter from './debitRouter';

const routers = express.Router();

routers.get('/', (_req, res) => res.status(200).json({message: 'OK'}));

routers.use(userRouter);

routers.use(loginRouter);

routers.use(debitRouter);

routers.use('/doc', docRouter);

export default routers;
