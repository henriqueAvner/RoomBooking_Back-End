const { Reservation, Room, User } = require('../models');
const serviceResponse = require('../utils/messages');

const findAll = async () => {
    const allReservations = await Reservation.findAll({
        include: [{ model: Room, as: 'Rooms', attributes: { exclude: ['id'] } }, { model: User, as: 'Users', attributes: { exclude: ['password'] } }],
    });
    return { status: serviceResponse.SUCCESS, data: allReservations }
}

const findReservById = async (id) => {
    const currReservation = await Reservation.findOne({ where: { id }, include: [{ model: Room, as: 'Rooms', attributes: { exclude: ['id'] } }, { model: User, as: 'Users', attributes: { exclude: ['password'] } }] });
    if (!currReservation) {
        return { status: serviceResponse.BAD_REQUEST, data: { message: "We don't have this reservation!" } };
    }
    return { status: serviceResponse.SUCCESS, data: currReservation }
}

const newReserv = async (checkIn, roomId, checkOut) => {

    await Reservation.create({ checkIn, roomId, checkOut });

    return { status: serviceResponse.CREATED, data: { message: 'New reservation created!' } };

}

const updateReserv = async (id, checkIn, roomId, checkOut) => {
    const findId = await Reservation.findOne({ where: { id } });
    if (!findId) {
        return { status: serviceResponse.NOT_FOUND, data: { message: 'No reservation found' } };
    }
    if (!checkIn || !roomId || !checkOut) {
        return { status: serviceResponse.BAD_REQUEST, data: { message: 'Complete the required fields!' } };
    }
    await Reservation.update({
        checkIn,
        roomId,
        checkOut,
    }, { where: { id } });
    return { status: serviceResponse.SUCCESS, data: { message: 'Reservation updated' } };
}

const deleteReserv = async (id) => {
    const findId = await Reservation.findOne({ where: { id } });
    if (!findId) {
        return { status: serviceResponse.NOT_FOUND, data: { message: 'No reservation found' } };
    }
    await Reservation.destroy({ where: { id } });

    return { status: serviceResponse.NO_CONTENT, data: {} };
}



module.exports = {
    findAll,
    findReservById,
    newReserv,
    updateReserv,
    deleteReserv,
}