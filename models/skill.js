const skills = [
    {id: 1, skill: "HTML5", done: true},
    {id: 2, skill: "JavaScript", done: false},
    {id: 3, skill: "Crimefighting", done: true},
    {id: 4, skill: "RESTful routing", done: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
    
}

function deleteOne(id) {
    // Remember all properties from req.params come are passed as strings. Use parseInt to convert id from the req.params to an index (number).
    id = parseInt(id);
    // Find the index (numder) based on the id of the skills object
    const index = skills.findIndex(skill => skill.id === id);
    skills.splice(index, 1);
}

function create(skill) {
    // Generate an id
    skill.id = Date.now() % 1000000;
    // Give yourself some credit, consider the skill done
    skill.done = true;
    skills.push(skill);

}
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}