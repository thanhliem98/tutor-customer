const express = require('express');
const app = express();
const majorController = require('../controllers/major.controller');

app.get('/major', majorController.getMajorList);

module.exports = app;
