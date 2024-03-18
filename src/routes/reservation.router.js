const { Router } = require('express');
const { reservationController } = require('../controllers');
const reservationRouter = Router();


reservationRouter
    .get('/reservations', reservationController.findAll)
    .get('/reservations/:id', reservationController.findReservById)
    .post('/reservations', reservationController.newReserv)
    .put('/reservations/:id', reservationController.updateReserv)
    .delete('/reservations/:id', reservationController.deleteReserv)

module.exports = reservationRouter;