// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    getProjects() {
        return db('projects')
    },
    getProjectsById(id) {
        return db('projects').where('id', id).first()
    },

    insertProject(project) {
        return db('projects').insert(project)
    }
}