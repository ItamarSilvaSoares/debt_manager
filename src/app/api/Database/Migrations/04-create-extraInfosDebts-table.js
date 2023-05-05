/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('extra_infos_debt', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      debtId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'debt_id',
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
    await queryInterface.dropTable('extra_infos_debt');
  },
};
