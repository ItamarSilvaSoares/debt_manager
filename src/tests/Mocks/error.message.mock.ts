import {zod} from '../../app/api/Utils/Constants';

const invalidEmail = {message: `email: ${zod.email}`};
const invalidPassword = {message: `password: ${zod.min}`};
const invalidUsername = {message: 'username: Expected string, received number'};
const invalidCell = {
  message: 'cell: String must contain at least 11 character(s)',
};
const invalidUser = {message: 'Email or password invalid'};

const emailAlreadyExists = {message: 'User already registered'};

const emailAlreadyExistsInDb = {message: 'Invalid Email'};

const nothingToUpdate = {message: 'Nothing to update'};

const invalidToken = {message: 'Token must be a valid token'};

const tokenMiss = {message: 'Token Not Found'};

const userDeleted = {message: 'User deleted successfully'};

export default {
  userDeleted,
  tokenMiss,
  invalidToken,
  nothingToUpdate,
  emailAlreadyExistsInDb,
  invalidCell,
  invalidUsername,
  invalidEmail,
  invalidPassword,
  invalidUser,
  emailAlreadyExists,
};
