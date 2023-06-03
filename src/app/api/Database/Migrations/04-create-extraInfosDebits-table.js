/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('extra_infos_debit', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      debitId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'debit_id',
      },
      to: {
        type: Sequelize.STRING,
      },
      scannableLines: {
        type: Sequelize.STRING,
        field: 'scannable_lines',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('extra_infos_debit');
  },
};
