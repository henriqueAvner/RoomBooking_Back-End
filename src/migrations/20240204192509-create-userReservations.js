'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('UserReservation', {
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

      reservationId: {

        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'reservation_id',
        references: {
          model: 'Reservations',
          key: 'id',
        }
      },
    }, { timestamps: false });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('UserReservation');

  }
};
