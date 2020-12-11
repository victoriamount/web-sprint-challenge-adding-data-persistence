// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()


router.get('/', (req, res) => {
    Projects.getProjects()
        .then(response => {
            const truefalseresponse = response.map(projObj => {
                if (projObj.completed === 0) {
                    return { ...projObj, completed: false }
                } else {
                    return { ...projObj, completed: true }
                }
            })
            res.json(truefalseresponse)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/', (req, res) => {
    Projects.insertProject(req.body)
        .then(newId => {
            Projects.getProjectsById(newId)
                .then(proj => {
                    if (proj.completed === 0) {
                        const falseProj = { ...proj, completed: false }
                        res.json(falseProj)
                    } else {
                        const trueProj = { ...proj, completed: true }
                        res.json(trueProj)
                    }
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router