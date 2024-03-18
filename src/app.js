const express = require('express');
const userRouter = require('./routes/user.router');
const roomRouter = require('./routes/room.router');
const reservationRouter = require('./routes/reservation.router');

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(roomRouter);
app.use(reservationRouter);


module.exports = app;