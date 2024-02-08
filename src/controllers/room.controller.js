const { roomService } = require("../services")
const statusHttp = require('../utils/httpMapCode');

const findAll = async (_req, res) => {
    try {
        const { status, data } = await roomService.findAll();
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
};

const findRoomPk = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await roomService.findRoomPk(id);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
}

const createRoom = async (req, res) => {
    try {
        const { roomNumber, roomType, nightPrice } = req.body;
        const { status, data } = await roomService.createRoom(roomNumber, roomType, nightPrice);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
}

const updateRoom = async (req, res) => {
    try {
        const { roomNumber, roomType, nightPrice } = req.body;
        const { id } = req.params;
        const { status, data } = await roomService.updateRoom(id, roomNumber, roomType, nightPrice);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
}

const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await roomService.deleteRoom(id);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
}

module.exports = {
    findAll,
    findRoomPk,
    createRoom,
    updateRoom,
    deleteRoom,
}