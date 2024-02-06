const { UserReservation } = require('../models');

const findAllUserReserv = async () => {
    const allUserReserv = await UserReservation.findAll();
    return allUserReserv;
}

module.exports = {
    findAllUserReserv,
}

