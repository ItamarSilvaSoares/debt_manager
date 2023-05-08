import express from 'express';

import DebtController from '../Controllers/debt.controller';

const router = express.Router();

router.get('/debt', (req, res) => DebtController.find(req, res));

export default router;
