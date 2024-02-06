const ReservationModel = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        checkIn: DataTypes.DATE,
        roomId: { type: DataTypes.INTEGER, foreignKey: true },
        checkOut:DataTypes.DATE,
    },{
        tableName: 'Reservations',
        underscored: true,
        timestamps: false,
    });
    Reservation.associate = (models) => {
        Reservation.belongsTo(models.Room,
            { foreignKey: 'roomId', as: 'Rooms' })
    }
    return Reservation;
}

module.exports = ReservationModel
