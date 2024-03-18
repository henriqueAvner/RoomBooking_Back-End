const { Router } = require('express');
const { userController } = require('../controllers');
const { validateToken } = require('../middlewares/authMiddleware');
const userRouter = Router();

userRouter
    .post('/users/register', userController.createUser)
    .post('/login', userController.login)
    .get('/users', validateToken, userController.findAllUsers)
    .get('/users/:id', validateToken, userController.findUserByPk)
    .put('/users/:id', validateToken, userController.updateUser)
    .delete('/users/:id', validateToken, userController.deleteUser)

module.exports = userRouter;