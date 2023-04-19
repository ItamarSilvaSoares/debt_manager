const userInDb = {
  id: 1,
  username: 'User',
  email: 'user@user.com',
  password: '$2a$12$6f6t4ll502Qn1ARuJtjaZurZjMnhlQbW/26f.ifORJbUNIoZuqMVO', // senha: password
  cell: '123456789',
};

const userInfosLogin = {
  email: 'user@user.com',
  password: 'password',
};

const userInfosLoginPasswordIncorrect = {
  email: 'user@user.com',
  password: '123456789',
};

const userInfosLoginInvalidEmail = {
  email: 'XXXXXXXXXXXXX',
  password: 'password',
};

const userInfosLoginInvalidPassword = {
  email: 'user@user.com',
  password: 'XXX',
};

export default {
  userInfosLoginInvalidPassword,
  userInfosLoginInvalidEmail,
  userInfosLogin,
  userInDb,
  userInfosLoginPasswordIncorrect,
};
