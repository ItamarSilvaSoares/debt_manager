import express from 'express';

import DebitController from '../Controllers/debit.controller';
import validations from '../Middlewares/body.validations';
import jwtValidation from '../Middlewares/jwt.validation';

const router = express.Router();

router.post(
  '/debit',
  validations.CreateRequestDebitBody,
  jwtValidation.validate,
  (req, res) => DebitController.create(req, res)
);

router.patch(
  '/debit/:id',
  validations.UpdateRequestDebitBody,
  jwtValidation.validate,
  (req, res) => DebitController.update(req, res)
);

router.put('/debit/:id', jwtValidation.validate, (req, res) =>
  DebitController.payDebit(req, res)
);

router.get('/debit/all-debts', jwtValidation.validate, (req, res) =>
  DebitController.getAll(req, res)
);

router.get('/debit/all-payed-debts', jwtValidation.validate, (req, res) =>
  DebitController.getAllPayed(req, res)
);

router.get('/debit/all-unpaid-debts', jwtValidation.validate, (req, res) =>
  DebitController.getAllUnPayed(req, res)
);

export default router;
