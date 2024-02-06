const { User } = require('../models');

const findAll = async () => {
    const allUsers = await User.findAll();
    return allUsers;
};


module.exports = {
    findAll,
}