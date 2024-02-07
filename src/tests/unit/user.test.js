const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../models/User');

describe('O model de User', () => {
    const User = UserModel(sequelize, dataTypes);
    const user = new User();

    describe('possui o nome "User"', () => {
        checkModelName(User)('User');
    });

    describe('possui as propriedades "nome", "email" e "password"', () => {
        ['nome', 'email', 'password'].forEach(checkPropertyExists(user));
    });
});