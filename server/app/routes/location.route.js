const express = require('express');
const app = express();
const locationController = require('../controllers/location.controller');

app.get('/location', locationController.getLocationList);

module.exports = app;
