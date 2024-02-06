const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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

