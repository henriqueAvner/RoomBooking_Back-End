const express = require('express');

const { userController, roomController} = require('./controllers');

const app = express();

app.use(express.json());

app.get('/users', userController.findAll)

app.get('/rooms', roomController.findAll)

app.get('/reservations')

module.exports = app;