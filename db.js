const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'products',
    password: 'jyothi',
    port: 5432
})

client.connect()

client.query('select * from produts', (err, res) => {
    console.log(res);
})
module.exports = client