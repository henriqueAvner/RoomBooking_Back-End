const RoomModel = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        room_number: DataTypes.INTEGER,
        room_type: DataTypes.STRING,
        night_price: DataTypes.INTEGER,
    }, {
        tableName: 'Rooms',
        underscored: true,
        timestamps: false,
    });
    return Room;

}

module.exports = RoomModel;
