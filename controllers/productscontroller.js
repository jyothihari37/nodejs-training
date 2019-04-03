const router = require('express').Router();
const productservice = require('../services/productservice')

router.get('/', async (req, res) => {
    const products = await productservice.getProducts()
    //res.json({message:'products route successful'})
    res.json({ products: products })
})

router.post('/:userID/:manufacturerID', async (req, res) => {
    try {
        const { userID, manufacturerID } = req.params
        await productservice.insert(userID, parseInt(manufacturerID), req.body)
        res.json({ message: "insert products successfully" })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }

})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const products = await productservice.getProductsById(parseInt(id))

    res.json({ products: products })
})

module.exports = router

