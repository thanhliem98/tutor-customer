const express = require('express');
const app = express();
const districtController = require('../controllers/district.controller');
const EUserType = require('../enums/EUserTypes');
const passport = require('passport');
const userUtils = require('../utils/user.utils');

app.get('/district/get-all', districtController.getAll);

module.exports = app;
