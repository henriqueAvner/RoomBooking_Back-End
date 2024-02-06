const {Room} = require('../models');

const findAll = async () => {
    const allRooms = await Room.findAll();
    return allRooms;
};

module.exports = {
    findAll,
}