


const express = require('express')
const router = express.Router()
const Programmer = require('../models/programmer')


router.get('/', async (req, res) => {
    try {
        const aliens = await Programmer.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const programmer = await Programmer.findById(req.params.id)
        res.json(programmer)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const programmer = new Programmer({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const p1 = await programmer.save()
        res.json(p1)
    } catch (err) {
        res.send('Error' + err)
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const programmer = await Programmer.findById(req.params.id)
        programmer.subs = req.body.subs
        const p1 = await programmer.save()
        res.json(p1)
    } catch (err) {
        res.send('Error')
    }

})

router.delete('/:id', async (req, res) => {
    try {

        const programmer = await Programmer.findById(req.params.id)
        const p1 = await programmer.remove()
        res.json(p1)

    } catch (err) {

        res.send('Error' + err)
    }
    


})


module.exports = router  