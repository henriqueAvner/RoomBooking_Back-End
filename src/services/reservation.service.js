const { Reservation } = require('../models');

const findAll = async () => {
    const allReservations = await Reservation.findAll();
    return allReservations;
}

module.exports = {
    findAll,
}