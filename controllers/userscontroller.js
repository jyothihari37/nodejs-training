const router = require('express').Router();
const usersservice = require('../services/usersservice');

router.get('/', async (req, res) => {
    const users = await usersservice.getUsers()
    //res.json({message:'products route successful'})
    res.json({ users: users })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const users = await usersservice.getUsersById(parseInt(id))
    res.json({ users: users })
})
router.post('/', async (req, res) => {
    try {

        await usersservice.insert(req.body)
        res.json({ message: "insert users successfully" })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }

})
module.exports = router

