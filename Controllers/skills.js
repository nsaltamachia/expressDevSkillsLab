const Skill = require("../models/skill")

// Controllers/skills.js
module.exports = {
    index,
    show
};

function index(req, res) {
    res.render("skills/index", {
        skills: Skill.getAll()
    });
};

function show(req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id)
    });
}