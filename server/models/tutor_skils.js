var db = require("../common/mysql");
const CONST = require('../utils/constants');

module.exports = {

    findById: id => {
        return db.findById(CONST.TUTOR_SKILL_TABLE, id);
    },

    getAllSkill: () => {
        return db.findAll(CONST.TUTOR_SKILL_TABLE);
    },

    deleteSkill: (skill_id, tutor_id) => {
        var sql = `DELETE from ${CONST.TUTOR_SKILL_TABLE} WHERE skill_id = ${skill_id} AND tutor_id = ${tutor_id}`
        return db.excute(sql);
    },

    addNewSkill: (entity) => {
        return db.add(CONST.TUTOR_SKILL_TABLE, entity);
    },

    update: (entity) => {
        return db.update(CONST.TUTOR_SKILL_TABLE, entity)
    },

    updateSkill: (entity) => {
        return db.update(CONST.TUTOR_SKILL_TABLE, entity);
    }
}