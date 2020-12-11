// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    getResources() {
        return db('resources')
    },
    getResourcesById(id) {
        return db('resources').where('resource_id', id).first()
    },

    insertResource(resource) {
        return db('resources').insert(resource)
    }
}