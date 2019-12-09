const db = require('../common/mysql');
const CONST = require('../utils/constants');

module.exports = {
    findByUserId: (user_id) => {
        return db.findByField(CONST.TUTOR_TABLE, "user_id", user_id);
    },
    findById: id => {
        return db.findById(CONST.TUTOR_TABLE, id);
    },

    getAllTutor: () => {
        return db.findAll(CONST.TUTOR_TABLE);
    },

    addNewTutor: (entity) => {
        return db.add(CONST.TUTOR_TABLE, entity);
    },

    update: (entity) => {
        return db.update(CONST.TUTOR_TABLE, entity)
    },

    updateTutor: (entity) => {
        return db.update(CONST.TUTOR_TABLE, entity);
    }
}