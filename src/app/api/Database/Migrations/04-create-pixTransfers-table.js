/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pix_transfers', {
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
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('pix_transfers');
  },
};
