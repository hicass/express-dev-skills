const Skill = require('../model/skills');

module.exports = {
    index,
    show,
    new: newSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'});
}