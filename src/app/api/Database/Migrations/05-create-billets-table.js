/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('billets', {
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
      scannableLines: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'scannable_lines',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('billets');
  },
};
