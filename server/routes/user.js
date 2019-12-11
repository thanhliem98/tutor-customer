var express = require('express');
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken')
const config = require('config')
const RESPONSE = require('../utils/response');
const UTILS = require('../utils/index');
const formidable = require('express-formidable');
const path = require('path');
const CONST = require('../utils/constants');
const fs = require('fs');
const tutorDB = require('../models/tutor');

// UPLOAD IMAGE PARAM
// Initial firebare project
const firebaseConfig = {
    apiKey: "AIzaSyANjXKvFErmTZNW3VH9C_43ky2BXkHDNgY",
    authDomain: "flashfood-ce894.firebaseapp.com",
    databaseURL: "https://flashfood-ce894.firebaseio.com",
    projectId: "flashfood-ce894",
    storageBucket: "flashfood-ce894.appspot.com",
    messagingSenderId: "765752489833",
    appId: "1:765752489833:web:db52ee853c96b65af52ff8"
};
const bucketName = "flashfood-ce894.appspot.com";
const { Storage } = require('@google-cloud/storage');
// Creates a client
const storage = new Storage(firebaseConfig);
const options = {
    gzip: false,
    metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000'
    },
}

// UPLOAD IMAGE PARAM END

const userDB = require('../models/user')

router.post('/update-profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    var user = req.body
    var username = user.username
    if (username) {
        userDB.findByUsername(username).then(value => {
            if (value) {
                Object.assign(value, user);
                value.password = util.hash_password(user.password)
                userDB.updateUser(value).then(rs => {
                    res.status(200).json({
                        code: 200,
                        message: 'Update user success'
                    })
                }).catch(err => {
                    console.error(err)
                    throw err
                })
            }
        }).catch(err => {
            console.error(err)
            throw error
        })
    }
    else {
        res.status(400).json({
            code: 400,
            status: "Bad request"
        })
    }
})

router.post('/register', (req, res, next) => {
    const entity = req.body;
    var hash = util.hash_password(entity.password);
    entity.password = hash;
    userDB.addNewUser(entity).then(value => {
        res.status(200).send({
            code: 200,
            message: 'Register success'
        })
    }).catch(err => {
        res.status(400).send({
            code: 400,
            message: 'Bad request'
        })
    })
})

router.post('/login', (req, res, next) => {
    console.log(req.body);
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.warn(err);
            return next(err);
        }
        if (!user) {
            return res.status(403).send({
                code: 403,
                message: info.message
            })
        }

        req.logIn(user, err => {
            if (err) {
                console.log(err)
                next(err);
            }

            let sign = {};
            sign.id = user.id;
            sign.role_id = user.role_id;
            tutorDB.findByUserId(user.id).then(tutor => {
                console.log(tutor);
                sign.tutor_id = tutor.id;
                // const token = jwt.sign(sign, config.get('jwt.secret'))
                // return res.status(200).send({
                //     code: 200,
                //     message: "Login success",
                //     token: token
                // })
            }).catch(err => {
                console.warn(err);
            }).finally(() => {
                const token = jwt.sign(sign, config.get('jwt.secret'))
                return res.status(200).send({
                    code: 200,
                    message: "Login success",
                    token: token
                })
            })
        });
    })(req, res, next);
})

async function uploadImage(img, req, res) {
    var filePath;
    try {
        filePath = img.avatar.path;
    }
    catch (err) {
        console.warn(err);
        RESPONSE.badRequest(res);
    }
    await storage.bucket(bucketName).upload(filePath, options, (err, file) => {
        if (err) {
            res.send({
                code: 500,
                message: "Tải file không thành công"
            })
        }
        else if (file) {
            var url = file.metadata.mediaLink;
            file.makePublic();
            UTILS.getUserFromToken(req).then(user => {
                if (user) {
                    userDB.findById(user.id).then(user => {
                        user.avatar = url;
                        userDB.updateUser(user).then(value => {
                            RESPONSE.success(res, value);
                        }).catch(err => {
                            console.warn(err);
                            RESPONSE.serverInternalError(res);
                        })
                    }).catch(err => {
                        console.warn(err);
                        RESPONSE.responseUnauthorize(res);
                    })
                }
                else {
                    RESPONSE.serverInternalError(res);
                }
            }).catch(err => {
                console.warn(err);
                RESPONSE.serverInternalError(res);
            })
            // unlink
            fs.unlinkSync(img.avatar.path);
        }
        else {
            res.send({
                code: 500,
                message: "Tải file không thành công"
            });
        }
    })
}

router.use(formidable({
    encoding: 'utf-8',
    uploadDir: path.join(__dirname, '../public/images/'),
    multiples: true,
    keepExtensions: true// req.files to be arrays of files
}));


router.post('/update-avatar', passport.authenticate('jwt', { session: false }), (req, res) => {
    try {
        var file = req.files;
        uploadImage(file, req, res);
    }
    catch (err) {
        console.warn(err);
        RESPONSE.badRequest(res);
    }
})

module.exports = router;