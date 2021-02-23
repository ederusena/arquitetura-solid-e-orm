'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BooksTable = queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
    });
    return BooksTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Books"),

};
