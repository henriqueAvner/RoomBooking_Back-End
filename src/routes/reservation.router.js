const { Router } = require('express');
const { reservationController } = require('../controllers');
const { validateToken } = require('../middlewares/authMiddleware');
const reservationRouter = Router();


reservationRouter
    .get('/reservations', reservationController.findAll)
    .get('/reservations/:id', validateToken, reservationController.findReservById)
    .post('/reservations', validateToken, reservationController.newReserv)
    .put('/reservations/:id', validateToken, reservationController.updateReserv)
    .delete('/reservations/:id', validateToken, reservationController.deleteReserv)

module.exports = reservationRouter;