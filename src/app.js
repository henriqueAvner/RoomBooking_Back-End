const express = require('express');

const { userController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/users', userController.findaAll)

module.exports = app;