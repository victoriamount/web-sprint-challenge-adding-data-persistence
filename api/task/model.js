// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    getTasks() {
        return db('tasks')
            .join('projects as p', 'p.project_id', 'tasks.project_id')
            .select('tasks.*', 'p.name as project_name', 'p.description as project_description')
    },
    getTasksById(id) {
        return db('tasks').where('task_id', id).first()
            .join('projects as p', 'p.project_id', 'tasks.project_id')
            .select('tasks.*', 'p.name as project_name', 'p.description as project_description')
    },

    insertTask(task) {
        return db('tasks').insert(task)
    }
}