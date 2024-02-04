'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      room_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      room_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      night_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');

  }
};
