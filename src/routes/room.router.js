const { Router } = require('express');
const { roomController } = require('../controllers');
const { validateToken } = require('../middlewares/authMiddleware');
const roomRouter = Router();


roomRouter
    .get('/rooms', validateToken, roomController.findAll)
    .get('/rooms/:id', validateToken, roomController.findRoomPk)
    .post('/rooms', validateToken, roomController.createRoom)
    .put('/rooms/:id', validateToken, roomController.updateRoom)
    .delete('/rooms/:id', validateToken, roomController.deleteRoom)

module.exports = roomRouter;