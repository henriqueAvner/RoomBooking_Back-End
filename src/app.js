const express = require('express');

const { userController, roomController, reservationController, userReservController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/users', userController.findAll)

app.get('/rooms', roomController.findAll)

app.get('/reservations', reservationController.findAll);

app.get('/userReservation', userReservController.findAllUserReserv);

module.exports = app;