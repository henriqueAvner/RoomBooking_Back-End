const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        tableName: 'Users',
        underscored: true,
        timestamps: false,
    });
    return User;

}

module.exports = UserModel;

