const { Room, Reservation } = require('../models');
const serviceResponse = require('../utils/messages');

const findAll = async () => {
    const allRooms = await Room.findAll();
    if (!allRooms) {
        return { status: serviceResponse.NOT_FOUND, data: { message: 'No one room was found' } }
    };
    return { status: serviceResponse.SUCCESS, data: allRooms }
};

const findRoomPk = async (id) => {
    const currRoom = await Room.findByPk(id);
    if (!currRoom) {
        return { status: serviceResponse.NOT_FOUND, data: { message: "This room wasn't found" } }
    };
    return { status: serviceResponse.SUCCESS, data: currRoom };

}

const createRoom = async (roomNumber, roomType, nightPrice) => {
    const existRoom = await Room.findOne({ where: { roomNumber } });
    if (existRoom) {
        return { status: serviceResponse.CONFLICT, data: { message: 'This room is already created' } };
    }
    await Room.create({ roomNumber, roomType, nightPrice });
    return { status: serviceResponse.CREATED, data: { message: 'New Room available!' } };
}

const updateRoom = async (id, roomNumber, roomType, nightPrice) => {
    const existRoom = await Room.findOne({ where: { id } });
    if (!existRoom) {
        return { status: serviceResponse.NOT_FOUND, data: { message: "We don't have this room, please type a true room value!" } };
    }
    if (!roomNumber || !roomType || !nightPrice) {
        return { status: serviceResponse.BAD_REQUEST, data: { message: 'Error, please type a completed room for update!' } };
    }
    await Room.update({ roomNumber, roomType, nightPrice }, { where: { id } });

    return { status: serviceResponse.SUCCESS, data: { message: 'Room updated!' } };

}

const deleteRoom = async (id) => {
    const findRoom = await Room.findOne({ where: { id } });
    if (!findRoom) {
        return { status: serviceResponse.NOT_FOUND, data: { message: 'Type a valid room!' } };
    }
    await Room.destroy({ where: { id } });

    return { status: serviceResponse.NO_CONTENT, data: {} };
}

module.exports = {
    findAll,
    findRoomPk,
    createRoom,
    updateRoom,
    deleteRoom,
}