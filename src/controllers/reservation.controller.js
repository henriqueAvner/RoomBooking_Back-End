const { reservationService } = require('../services');
const statusHttp = require('../utils/httpMapCode');


const findAll = async (_req, res) => {
    try {
        const { status, data } = await reservationService.findAll();
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error!: ${error.message}` })
    };
};

const findReservById = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await reservationService.findReservById(id);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error!: ${error.message}` })
    }
}

const newReserv = async (req, res) => {
    try {
        const { checkIn, roomId, checkOut } = req.body;
        const { status, data } = await reservationService.newReserv(checkIn, roomId, checkOut);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error!: ${error.message}` })
    }
}

const updateReserv = async (req, res) => {
    try {
        const { id } = req.params;
        const { checkIn, roomId, checkOut } = req.body;
        const { status, data } = await reservationService.updateReserv(id, checkIn, roomId, checkOut);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error!: ${error.message}` });
    }
}

const deleteReserv = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await reservationService.deleteReserv(id);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error!: ${error.message}` });
    }
}


module.exports = {
    findAll,
    findReservById,
    newReserv,
    updateReserv,
    deleteReserv
}