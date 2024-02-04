'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Rooms', [
      {
        room_number: 101,
        room_type: 'Standard',
        night_price: 150
      },
      {
        room_number: 102,
        room_type: 'Deluxe',
        night_price: 200
      },
      {
        room_number: 201,
        room_type: 'Suite',
        night_price: 300
      },
      {
        room_number: 202,
        room_type: 'Standard',
        night_price: 150
      },
      {
        room_number: 301,
        room_type: 'Deluxe',
        night_price: 200
      },
      {
        room_number: 302,
        room_type: 'Suite',
        night_price: 300
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Rooms', null, {});

  }
};
