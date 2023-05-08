module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'extra_infos_debt',
      [
        {
          debt_id: 1,
          to: 'companhia de síndicos',
        },
        {
          debt_id: 2,
          to: 'Sabesp',
        },
        {
          debt_id: 3,
          to: 'Loja da Loja',
          scannable_lines: '13245678912345679813456798',
        },
        {
          debt_id: 4,
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
