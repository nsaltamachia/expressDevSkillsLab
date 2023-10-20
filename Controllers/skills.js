const Skill = require("../models/skill")

// Controllers/skills.js
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    Skill.update(req.params.id, req.body),
        res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render("skills/edit", {
        title: "Edit Skill",
        skill,
    });
}

function deleteSkill (req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect("/skills");
}

function create(req, res) {
    // Reference the model here, models are responsible for CRUDing the data are singular with a Capital
    Skill.create(req.body);
    // As the skill is created, ALWAYS redirect request back to /skills
    res.redirect("/skills");
}

function newSkill(req, res) {
    res.render("skills/new", {title: "Add A New Skill"});
    
}

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