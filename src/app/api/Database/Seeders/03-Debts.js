module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'debts',
      [
        {
          userId: 1,
          type: 1,
          value: 500,
          description: 'aluguel do mês',
          dueDate: Date.now(),
          payed: true,
        },
        {
          userId: 1,
          type: 2,
          value: 120.2,
          description: 'conta de água',
          dueDate: Date.now(),
        },
        {
          userId: 2,
          type: 3,
          value: 320.52,
          description: 'compra de mercadorias',
          dueDate: Date.now(),
        },
        {
          userId: 2,
          type: 4,
          value: 60.72,
          description: 'pizza',
          dueDate: Date.now(),
          payed: true,
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('debts', null, {});
  },
};
