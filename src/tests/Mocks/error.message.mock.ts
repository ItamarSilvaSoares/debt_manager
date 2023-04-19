import {zod} from '../../app/api/Utils/Constants';

const invalidEmail = {message: `email: ${zod.email}`};
const invalidPassword = {message: `password: ${zod.min}`};
const invalidUsername = {message: 'username: Expected string, received number'};
const invalidCell = {
  message: 'cell: String must contain at least 11 character(s)',
};
const invalidUser = {message: 'Email or password invalid'};

const emailAlreadyExists = {message: 'User already registered'};

export default {
  invalidCell,
  invalidUsername,
  invalidEmail,
  invalidPassword,
  invalidUser,
  emailAlreadyExists,
};
