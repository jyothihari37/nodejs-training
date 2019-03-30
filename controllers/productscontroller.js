const router = require('express').Router();
const productservice = require('./services/productservice')

router.get('/', (req, res) => {
    const products = productservice.getProducts()
    //res.json({message:'products route successful'})
    res.json({ products: products })
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    res.json({ message: "in products  post single post" })
})

router.get('/:id', (req, res) => {
    console.log(`products ${req.params.id}`)
    res.json({ message: "in products  single" })
})

module.exports = router

