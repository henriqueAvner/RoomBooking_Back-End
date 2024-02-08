const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const RoomModel = require('../../models/Room');

describe('O model de Room', () => {
    const Room = RoomModel(sequelize, dataTypes);
    const room = new Room();

    describe('possui o nome "Room"', () => {
        checkModelName(Room)('Room');
    });

    describe('possui as propriedades "roomNumber", "roomType" e "nightPrice"', () => {
        ["roomNumber", "roomType", "nightPrice"].forEach(checkPropertyExists(room));
    });
});