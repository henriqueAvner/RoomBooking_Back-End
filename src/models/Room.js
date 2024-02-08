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
    Room.associate = (models) => {
        Room.hasMany(models.Reservation,
            { foreignKey: 'roomId', as: 'Reservations' })
    }
    return Room;

}

module.exports = RoomModel;
