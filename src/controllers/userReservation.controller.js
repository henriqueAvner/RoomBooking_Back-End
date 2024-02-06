const { userReservService } = require('../services');

const findAllUserReserv = async (req, res) => {
    try {
        const allUserReserv = await userReservService.findAllUserReserv();
        return res.status(200).json(allUserReserv);
    } catch (error) {
        console.log(error.message);
        return res.status(404).json({ message: 'No one user reserve was found' });
    };
}

module.exports = {
    findAllUserReserv,
}