const router = require('express').Router();
router.get('/', (req, res) => {
    console.log(`logistics`)
    res.json({ message: "in logistics with help of seperating controllers" })
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "in logistics  post single post" })
})

router.get('/:id', (req, res) => {
    console.log(`logistics ${req.params.id}`)
    res.json({ message: "in logistics single" })
})

module.exports = router

