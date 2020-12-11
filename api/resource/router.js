// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()


router.get('/', (req, res) => {
    Resources.getResources()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/', (req, res) => {
    Resources.insertResource(req.body)
        .then(newId => {
            Resources.getResourcesById(newId)
                .then(resource => {
                    res.json(resource)
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