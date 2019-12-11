
var bcrypt = require('bcrypt');
var config = require('config');
var moment = require("moment");
const jwt = require('jsonwebtoken');
const CONST = require('../utils/constants');
const SECRET_KEY = config.get(CONST.JWT_SECRET);

function getToken(req) {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  return token;
}

module.exports = {
  generateKey: (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  GetTimeNow: () => {
    return moment().format("YYYY/MM/DD hh:mm:ss")
  },

  UpdatePostDate: (value) => {
    return moment(value).format("YYYY/MM/DD hh:mm:ss")
  },

  ConvertToMilliSecond: (value) => {
    return moment.utc(value).valueOf();
  },

  hash_password: (password) => {
    var saltRounds = config.get('salt');
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
  },
  getBearerToken: (req) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
    return token;
  },
  getUserFromToken: (req) => {
    var token = getToken(req);
    return new Promise((resolve, reject) => {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
          reject(err);
        }
        resolve(decoded);
      })
    });
  }

}