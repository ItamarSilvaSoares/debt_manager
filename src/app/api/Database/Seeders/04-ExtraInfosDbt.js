module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'extra_infos_debt',
      [
        {
          debtId: 1,
          to: 'companhia de síndicos',
        },
        {
          debtId: 2,
          to: 'Sabesp',
        },
        {
          debtId: 3,
          to: 'Loja da Loja',
          scannableLines: '13245678912345679813456798',
        },
        {
          debtId: 4,
          to: 'pizzaria do pizzaiolo',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('extra_infos_debt', null, {});
  },
};
