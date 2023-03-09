import express from 'express';

import docRouter from './docRouter';

const routers = express.Router();

routers.get('/', (_req, res) => res.status(200).json({message: 'OK'}));

routers.use('/doc', docRouter);

export default routers;
