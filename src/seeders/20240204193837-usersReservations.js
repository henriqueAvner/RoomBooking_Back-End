'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('UserReservation', [
      {
        user_id: 2,
        reservation_id: 1
      },
      {
        user_id: 1,
        reservation_id: 1
      },
      {
        user_id: 8,
        reservation_id: 3
      },
      {
        user_id: 6,
        reservation_id: 3
      },
      {
        user_id: 10,
        reservation_id: 5
      },
      {
        user_id: 9,
        reservation_id: 5
      },
      {
        user_id: 7,
        reservation_id: 4
      },
      {
        user_id: 5,
        reservation_id: 4
      },
      {
        user_id: 3,
        reservation_id: 6
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('UserReservation', null, {});

  }
};
