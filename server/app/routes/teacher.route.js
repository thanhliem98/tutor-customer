const express = require('express');
const app = express();
const teacherController = require('../controllers/teacher.controller');
const EUserType = require('../enums/EUserTypes');
const passport = require('passport');
const userUtils = require('../utils/user.utils');

app.get('/teacher/get-info/:id', teacherController.getInfo);
app.post('/teacher/update-info',
    passport.authenticate('jwt', { session: false }),
    userUtils.checkRole(EUserType.TEACHER),
    teacherController.updateInfoTeacher);

module.exports = app;
