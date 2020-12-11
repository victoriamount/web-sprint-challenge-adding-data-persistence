// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(response => {
            const truefalseresponse = response.map(taskObj => {
                if (taskObj.completed === 0) {
                    return { ...taskObj, completed: false }
                } else {
                    return { ...taskObj, completed: true }
                }
            })
            res.json(truefalseresponse)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/', (req, res) => {
    Tasks.insertTask(req.body)
        .then(newId => {
            Tasks.getTasksById(newId)
                .then(task => {
                    if (task.completed === 0) {
                        const falseTask = { ...task, completed: false }
                        res.json(falseTask)
                    } else {
                        const trueTask = { ...task, completed: true }
                        res.json(trueTask)
                    }
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
        })
        // .then(response => {
        //     res.json(response)
        // })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router