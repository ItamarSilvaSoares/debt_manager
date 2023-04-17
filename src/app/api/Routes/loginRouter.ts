import express from 'express';
import loginController from '../Controllers/login.controller';

const router = express.Router();

router.post('/login', (req, res) => loginController.login(req, res));

export default router;
