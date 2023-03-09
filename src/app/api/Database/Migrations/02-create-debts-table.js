/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('debts', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'user_id',
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      dueDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'due_date',
      },
      payed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('debts');
  },
};
