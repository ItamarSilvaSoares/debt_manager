import express from 'express';
import loginController from '../Controllers/login.controller';
import validations from '../Middlewares/Validations';

const router = express.Router();

router.post('/login', validations.LoginRequestUserBody, (req, res) =>
  // #swagger.tags = ['Login']
  // #swagger.description = 'Endpoint para o login de um usuário.'

  /* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Informações do usuário para o login.',
    required: true,
    schema: { $ref: "#/definitions/LoginUser" }
  } */

  // #swagger.responses[200] = { schema: { $ref: "#/definitions/Token"}, description: 'User Create' }
  // #swagger.responses[401] = { schema: { $ref: "#/definitions/Unauthorized"}, description: 'Unauthorized' }
  // #swagger.responses[400] = { schema: { $ref: "#/definitions/BadRequest"}, description: 'Bad Request' }
  loginController.login(req, res)
);

export default router;
