module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'debts_types',
      [
        {
          type: 'Aluguel',
        },
        {
          type: 'Pagamento de conta',
        },
        {
          type: 'Boleto',
        },
        {
          type: 'Pix/Transferência',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('debts_types', null, {});
  },
};
