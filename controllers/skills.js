const Skill = require('../model/skills');

module.exports = {
    index
}

function index(req, res) {
    res.render('todos/index', {
        skills: Skill.getAll()
    });
}