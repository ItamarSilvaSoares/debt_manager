export enum Suffix {
  dev = '-dev',
  development = '-dev',
  test = '-test',
  production = '-prod',
  prod = '-prod',
}

export const ErrosUserMensagens = {
  conflictUser: 'User already registered',
  notFoundUser: 'User not found',
};

export const ErrosJwtMensagens = {
  TokenNotFound: 'TokenNotFound',
};

export const zod = {
  email: 'Invalid email address',
  min: 'Must be 6 or more characters long',
};

export const ErrosLogin = {
  erroLogin: 'Email or password invalid',
};
