const { User, Reservation } = require('../models');
const { generateToken } = require('../utils/JWT');

const serviceResponse = require('../utils/messages');

const findAllUsers = async () => {
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    if (!allUsers) {
        return { status: serviceResponse.NOT_FOUND, data: { message: 'Users not found' } }
    }
    return { status: serviceResponse.SUCCESS, data: allUsers }
};

const findUserByPk = async (id) => {
    const currUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!currUser) {
        return { status: serviceResponse.NOT_FOUND, data: { message: 'User not found' } }
    }
    return { status: serviceResponse.SUCCESS, data: currUser };
}

const createUser = async (nome, email, password) => {
    const findUser = await User.findOne({ where: { nome } });
    if (findUser) {
        return { status: serviceResponse.BAD_REQUEST, data: { message: 'This user already exists' } }
    }
    const newUser = await User.create({
        nome,
        email,
        password,
    });
    return { status: serviceResponse.CREATED, data: { message: 'User created!' } };
}

const updateUser = async (id, nome, email, password) => {
    const findUser = await User.findByPk(id);
    if (!findUser) {
        return { status: serviceResponse.BAD_REQUEST, data: { message: 'User not found' } }
    }
    await User.update(
        { nome, email, password },
        { where: { id } },
    );
    return { status: serviceResponse.SUCCESS, data: { message: 'User updated!' } }
}

const deleteUser = async (id) => {
    const findUser = await User.findByPk(id);
    if (!findUser) {
        return { status: serviceResponse.BAD_REQUEST, data: { message: 'User not found' } }
    }
    await User.destroy({ where: { id } });
    return { status: serviceResponse.NO_CONTENT, data: { message: 'User deleted' } }
}

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return { status: serviceResponse.UNAUTHORIZED, data: { message: 'Invalid email or password' } }
    }
    if (user.password !== password) {
        return { status: serviceResponse.UNAUTHORIZED, data: { message: 'Invalid email or password' } }
    }
    const payload = {
        id: user.id,
    };
    const token = generateToken(payload);
    return { status: serviceResponse.SUCCESS, data: { token } }
}

module.exports = {
    findAllUsers,
    findUserByPk,
    createUser,
    updateUser,
    deleteUser,
    login,
}