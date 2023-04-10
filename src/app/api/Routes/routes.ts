import express from 'express';

import docRouter from './docRouter';
import userRouter from './userRouter';

const routers = express.Router();

routers.get('/', (_req, res) => res.status(200).json({message: 'OK'}));

routers.use('/user', userRouter);

routers.use('/doc', docRouter);

export default routers;
