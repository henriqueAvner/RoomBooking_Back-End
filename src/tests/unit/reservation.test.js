const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const ReservationModel = require('../../models/Reservation');

describe('O model de User', () => {
    const Reservation = ReservationModel(sequelize, dataTypes);
    const reservation = new Reservation();

    describe('possui o nome "Reservation"', () => {
        checkModelName(Reservation)('Reservation');
    });

    describe('possui as propriedades "checkIn", "roomId", "checkOut"', () => {
        ['checkIn', 'roomId', 'checkOut'].forEach(checkPropertyExists(reservation));
    });
});