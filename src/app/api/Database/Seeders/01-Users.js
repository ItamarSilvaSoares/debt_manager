module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'User',
          email: 'user@user.com',
          password:
            '$2a$12$6f6t4ll502Qn1ARuJtjaZurZjMnhlQbW/26f.ifORJbUNIoZuqMVO', // senha: password
          cell: '123456789',
        },
        {
          username: 'Admin',
          email: 'admin@user.com',
          password:
            '$2a$12$6f6t4ll502Qn1ARuJtjaZurZjMnhlQbW/26f.ifORJbUNIoZuqMVO', // senha: password
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
