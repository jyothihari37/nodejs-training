const app = require('express')();
const bodyParser = require('body-parser')
const productscontroller = require('./controllers/productscontroller')
const logisticscontroller = require('./controllers/logisticscontroller')
const dashboardcontroller = require('./controllers/dashboardcontroller')
const userscontroller = require('./controllers/userscontroller')
const authcontroller = require('./controllers/authcontrollers')
const manufacturercontroller = require('./controllers/manufacturercontroller')

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({ message: 'hello world' })
})

app.use('/manufacturer', manufacturercontroller)
app.use('/auth', authcontroller)
app.use('/users', userscontroller)

app.use('/products', productscontroller)

app.use('/dashboard', dashboardcontroller)

app.use('/logistics', logisticscontroller)

app.get('/logistics/:id/products', (req, res) => {
    const id = req.params.id
    console.log(`logistics id is ${id}`);
    res.json({ message: 'logistics with products are routing defined' })
})
module.exports = app