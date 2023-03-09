/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('debts_types', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('debts_types');
  },
};
