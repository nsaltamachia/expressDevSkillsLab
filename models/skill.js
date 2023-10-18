const skills = [
    {id: 1, skill: "HTML5", done: true},
    {id: 2, skill: "JavaScript", done: true},
    {id: 3, skill: "Crimefighting", done: true},
    {id: 4, skill: "RESTful routing", done: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}