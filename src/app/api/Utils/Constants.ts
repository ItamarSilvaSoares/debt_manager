export enum Suffix {
  dev = '-dev',
  development = '-dev',
  test = '-test',
  production = '-prod',
  prod = '-prod',
}

export const ErrosUserMensagens = {
  conflictUser: 'User already registered',
  conflictEmail: 'Invalid Email',
  notFoundUser: 'User not found',
};

export const ErrosJwtMensagens = {
  TokenNotFound: 'Token Not Found',
  TokenInvalid: 'Token must be a valid token',
};

export const zod = {
  email: 'Invalid email address',
  min: 'Must be 6 or more characters long',
};

export const userMessages = {
  deleteUser: 'User deleted successfully',
};

export const ErrosLogin = {
  erroLogin: 'Email or password invalid',
};

export const dateRegex =
  /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;

export const ErroDate = {
  erroDate: 'Date must be DD/MM/YYYY or  DD-MM-YYYY',
};

export const CrossBar = '/';

export const Hífen = '-';
