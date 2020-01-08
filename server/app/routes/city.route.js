const express = require('express');
const app = express();
const cityController = require('../controllers/city.controller');

app.get('/city/get-all', cityController.getAll);

module.exports = app;
