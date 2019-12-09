const express = require('express');
var router = express.Router();
const Utils = require('../../utils/index');
const Response = require('../../utils/response');

// database
const tutorSkillDB = require('../../models/tutor_skils');
const tutorDB = require('../../models/tutor');

router.post('/update-skill', (req, res) => {
    Utils.getUserFromToken(req).then(user => {
        var tutor_id = user.tutor_id;
        if (user && tutor_id) {
            let entity = req.body;
            let action = entity.action;
            let skill_id = entity.skill_id;
            switch (action) {
                case 'CREATE':
                    for (const skill of skill_id) {
                        var frm = {};
                        frm.skill_id = skill;
                        frm.tutor_id = tutor_id;
                        tutorSkillDB.addNewSkill(frm).then(value => {
                            console.log("Add successfully new skill " + skill + " for tutor " + tutor_id);
                        }).catch(err => {
                            console.warn(err);
                        })
                    }
                    Response.success(res);
                    break;
                case 'DELETE':
                    for (const skill of skill_id) {
                        var frm = {};
                        frm.skill_id = skill;
                        frm.tutor_id = tutor_id;
                        tutorSkillDB.deleteSkill(skill, tutor_id).then(value => {
                            console.log("Remove successfully skill " + skill + " for tutor " + tutor_id);
                        }).catch(err => {
                            console.warn(err);
                        })
                    }
                    Response.success(res);
                    break;
                default:
                    Response.badRequest(res);
            }
        }
        else {
            Response.responseUnauthorize(res);
        }
    }).catch(err => {
        console.warn(err);
        Response.serverInternalError();
    })
})

router.put('/introduce', (req, res) => {
    console.log(req.body)
    var introduceContent = req.body.introduce;
    if (introduceContent) {
        Utils.getUserFromToken(req).then(user => {
            if (user && user.tutor_id) {
                tutorDB.findByUserId(user.tutor_id).then(tutor => {
                    tutor.introduce = introduceContent;
                    tutorDB.updateTutor(tutor).then(value => {
                        res.send({
                            code: 200,
                            message: "Update introduce content success",
                            body: value
                        })
                    }).catch(err => {
                        console.warn(err);
                        Response.serverInternalError(res);
                    })
                }).catch(err => {
                    console.warn(err);
                    Response.serverInternalError(res);
                })
            }
            else {
                Response.responseUnauthorize(res);
            }
        }).catch(err => {
            console.warn(err);
            Response.responseUnauthorize(res);
        })
    }
    else {
        Response.badRequest(res);
    }
})

module.exports = router;