const { reservationService } = require('../services');


const findAll = async (req, res) => {
    try {
        const allReservations = await reservationService.findAll();
        return res.status(200).json(allReservations);
    } catch (error) {
        console.log(error.message);
        return res.status(404).json({ message: 'No reserve has been found' })
    };
};

module.exports = {
    findAll,
}