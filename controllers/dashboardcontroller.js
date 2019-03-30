const router = require('express').Router();
router.get('/', (req, res) => {
    console.log(`dashboard`)
    res.json({ message: "in dashboard routing" })
})

module.exports = router

