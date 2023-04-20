import express from 'express';
import UserController from '../Controllers/user.controller';
import validations from '../Middlewares/body.validations';
import jwtValidation from '../Middlewares/jwt.validation';

const router = express.Router();

router.post('/user', validations.CreateRequestUserBody, (req, res) =>
  // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint para cadastra um usuário.'

  /* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Informações do usuário.',
    required: true,
    schema: { $ref: "#/definitions/AddUser" }
  } */

  // #swagger.responses[201] = { schema: { $ref: "#/definitions/User"}, description: 'User Create' }
  // #swagger.responses[409] = { schema: { $ref: "#/definitions/ConflictUser"}, description: 'Conflict User' }
  // #swagger.responses[400] = { schema: { $ref: "#/definitions/BadRequest"}, description: 'Bad Request' }

  UserController.create(req, res)
);

router.patch(
  '/user',
  validations.UpdateRequestUserBody,
  jwtValidation.validate,
  (_req, res) =>
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para atualizar um usuário.'

    UserController.update(_req, res)
);

router.delete('/user', jwtValidation.validate, (_req, res) =>
  // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint para deletar um usuário.'

  UserController.delete(_req, res)
);

export default router;
