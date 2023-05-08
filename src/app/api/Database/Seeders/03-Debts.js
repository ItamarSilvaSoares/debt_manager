module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'debts',
      [
        {
          user_id: 1,
          type: 1,
          value: 500,
          description: 'aluguel do mês',
          due_date: new Date(Date.now()),
          payed: true,
        },
        {
          user_id: 1,
          type: 2,
          value: 120.2,
          description: 'conta de água',
          due_date: new Date(Date.now()),
          payed: false,
        },
        {
          user_id: 2,
          type: 3,
          value: 320.52,
          description: 'compra de mercadorias',
          due_date: new Date(Date.now()),
          payed: false,
        },
        {
          user_id: 2,
          type: 4,
          value: 60.72,
          description: 'pizza',
          due_date: new Date(Date.now()),
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
