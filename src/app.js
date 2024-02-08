const express = require('express');

const { userController, roomController, reservationController, userReservController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/users', userController.findAllUsers)
app.get('/users/:id', userController.findUserByPk);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.get('/rooms', roomController.findAll);
app.get('/rooms/:id', roomController.findRoomPk);
app.post('/rooms', roomController.createRoom);
app.put('/rooms/:id', roomController.updateRoom);
app.delete('/rooms/:id', roomController.deleteRoom);

app.get('/reservations', reservationController.findAll);

app.get('/userReservation', userReservController.findAllUserReserv);

module.exports = app;