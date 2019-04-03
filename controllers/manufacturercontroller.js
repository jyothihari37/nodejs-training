const router = require('express').Router();
const manufacturerservice = require('../services/manufacturerservice')


router.get('/', async (req, res) => {
    const manufacturer = await manufacturerservice.getManufacturer()
    res.header("Access-Control-Allow-Origin", "*")
    res.json({ manufacturer: manufacturer })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const manufacturer = await manufacturerservice.getManufacturerById(parseInt(id))
    res.json({ manufacturer: manufacturer })
})

router.post('/', async (req, res) => {
    try {

        await manufacturerservice.insert(req.body)
        res.json({ message: "insert manufacturers successfully" })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }

})
module.exports = router