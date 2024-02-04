'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reservations', [
      {
        room_id: 3,
        check_in: new Date(),
        check_out: new Date(),
      },
      {
        room_id: 1,
        check_in: new Date(),
        check_out: new Date(),
      },
      {
        room_id: 5,
        check_in: new Date(),
        check_out: new Date(),
      },
      {
        room_id: 4,
        check_in: new Date(),
        check_out: new Date(),
      },
      {
        room_id: 2,
        check_in: new Date(),
        check_out: new Date(),
      },
      {
        room_id: 6,
        check_in: new Date(),
        check_out: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
