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
