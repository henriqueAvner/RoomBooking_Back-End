const UserReservationModel = (sequelize, DataTypes) => {
    const UserReservation = sequelize.define('UserReservation', {
        userId: {type: DataTypes.INTEGER, primaryKey: true },
        reservationId: {type: DataTypes.INTEGER, primaryKey: true },
    },
    {
        tableName: 'UserReservation',
        underscored: true,
        timestamps: false,
    }
    );
    UserReservation.associate = (models) => {
        models.User.belongsToMany(models.Reservation, {
            as: 'Reservation',
            through: UserReservation,
            foreignKey: 'userId',
            otherKey: 'reservationId'
        })
        models.Reservation.belongsToMany(models.User, {
            as: 'Users',
            through: UserReservation,
            foreignKey: 'reservationId',
            otherKey: 'userId'
        })

    }
    return UserReservation;
}



module.exports = UserReservationModel;

