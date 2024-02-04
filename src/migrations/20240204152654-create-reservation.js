'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      checkIn: {
        type: Sequelize.DATE,
        field: 'check_in',
        allowNull: false,
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'room_id',
        references: {
          model: 'Rooms',
          key: 'id'
        }
      },
      checkOut: {
        type: Sequelize.DATE,
        field: 'check_out',
        allowNull: false,
      },

    }, { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');

  }
};
