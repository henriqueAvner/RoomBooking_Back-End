const RoomModel = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        roomNumber: DataTypes.INTEGER,
        roomType: DataTypes.STRING,
        nightPrice: DataTypes.INTEGER,
    }, {
        tableName: 'Rooms',
        underscored: true,
        timestamps: false,
    });
    return Room;

}

module.exports = RoomModel;
