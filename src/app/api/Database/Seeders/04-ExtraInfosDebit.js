module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'extra_infos_debit',
      [
        {
          debit_id: 1,
          to: 'companhia de síndicos',
        },
        {
          debit_id: 2,
          to: 'Sabesp',
        },
        {
          debit_id: 3,
          to: 'Loja da Loja',
          scannable_lines: '13245678912345679813456798',
        },
        {
          debit_id: 4,
          to: 'pizzaria do pizzaiolo',
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('extra_infos_debit', null, {});
  },
};
