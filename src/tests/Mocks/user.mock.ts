const newUser = {
  username: 'User',
  email: 'user@user.com',
  password: 'password',
  cell: '12345678910',
};

const findOneReturn = {
  id: 1,
  username: 'User',
  email: 'user@user.com',
  cell: '12345678910',
};

const newUserInvalidUsername = {
  username: 1,
  email: 'user@user.com',
  password: 'password',
  cell: '12345678910',
};

const newUserInvalidEmail = {
  username: 'User',
  email: 'user@user',
  password: 'password',
  cell: '12345678910',
};

const newUserInvalidPassword = {
  username: 'User',
  email: 'user@user.com',
  password: 'pa',
  cell: '12345678910',
};

const newUserInvalidCell = {
  username: 'User',
  email: 'user@user.com',
  password: 'password',
  cell: '123',
};

const userUpdateEmail = {
  email: 'user@user.com',
};

const userUpdatePasswordAndCell = {
  password: 'XXXXXXXX',
  cell: '9999999999',
};

const userUpdateReturn = {
  id: 1,
  username: 'User',
  email: 'user@user.com',
  cell: '9999999999',
};

export default {
  userUpdateReturn,
  newUserInvalidPassword,
  newUser,
  userUpdatePasswordAndCell,
  newUserInvalidUsername,
  newUserInvalidCell,
  newUserInvalidEmail,
  userUpdateEmail,
  findOneReturn,
};
