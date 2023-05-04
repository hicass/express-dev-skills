const skills = [
    {id: 415333, skill: 'HTML'},
    {id: 415332, skill: 'CSS'},
    {id: 415331, skill: 'JavaScript'},
    {id: 415330, skill: 'Node.js'},
    {id: 415329, skill: 'Express'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}