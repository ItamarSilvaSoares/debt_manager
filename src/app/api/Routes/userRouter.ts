import express from 'express';
import UserController from '../Controllers/user.controller';
import validations from '../Middlewares/Validations';

const router = express.Router();

router.post('/', validations.CreateRequestUserBody, (req, res) =>
  UserController.create(req, res)
);
router.get('/', validations.CreateRequestUserBody, (_req, res) =>
  res.status(200).json({message: 'OK'})
);

export default router;
