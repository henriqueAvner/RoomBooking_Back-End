const { userService } = require("../services")
const statusHttp = require('../utils/httpMapCode');

const findAllUsers = async (_req, res) => {
    try {
        const { status, data } = await userService.findAllUsers();
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findUserByPk = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await userService.findUserByPk(id);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const { nome, email, password } = req.body;
        const { status, data } = await userService.createUser(nome, email, password);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, password } = req.body;
        const { status, data } = await userService.updateUser(id, nome, email, password);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, data } = await userService.deleteUser(id);
        return res.status(statusHttp(status)).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    findAllUsers,
    findUserByPk,
    createUser,
    updateUser,
    deleteUser,
}