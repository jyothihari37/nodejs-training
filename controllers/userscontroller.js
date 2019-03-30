const router = require('express').Router();
const usersservice = require('./services/usersservice');
router.get('/', (req, res) => {
    const users = usersservice.getUsers()
    //res.json({message:'products route successful'})
    res.json({ users: users })
})

router.get('/', (req, res) => {
    console.log(`users`)
    res.json({ message: "in users routing" })
})
router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "in users  post single post" })
})
module.exports = router

