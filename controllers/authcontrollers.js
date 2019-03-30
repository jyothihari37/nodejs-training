const router = require('express').Router();
const authservice = require('../services/authservice')
router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        authservice.login(username, password)
        res.json({ token: "generated " })
    } catch (err) {
        res.status(401).json({ message: err })
    }
})
module.exports = router