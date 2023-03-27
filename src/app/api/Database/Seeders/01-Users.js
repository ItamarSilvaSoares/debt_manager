module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'User',
          email: 'user@usr.com',
          password: 'password', // senha: password
          cell: '123456789',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
