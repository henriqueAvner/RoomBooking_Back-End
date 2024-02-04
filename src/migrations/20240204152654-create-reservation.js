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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'room_id',
        references: {
          model: 'Rooms',
          key: 'id',
        }
      },
      checkIn: {
        type: Sequelize.DATE,
        field: 'check_in',
        allowNull: false,
      },
      checkOut: {
        type: Sequelize.DATE,
        field: 'check_out',
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');

  }
};
