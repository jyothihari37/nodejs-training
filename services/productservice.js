const client = require('../db')

exports.getProducts = async () => {
    const result = await client.query('select * from products')
    return result.rows;
}
exports.getProductsById = async (id) => {
    const result = await client.query(`select * from products where id = ${id}`)
    return result.rows[0];
}

exports.insert = async (userID, manufacturerID, product) => {
    try {
        const query = 'insert into products(name,code,price,description,quantity,created_at,created_by,manufacturer_id)VALUES($1,$2,$3,$4,$5,$6,$7,$8)'
        const values = [product.name, product.code, product.price, product.description, product.quantity, new Date(), userID, manufacturerID]
        await client.query(query, values)
    }
    catch (err) {
        console.log(err)
        throw 'unable to insert product'
    }
}

// exports.getProducts = () => {
//     return [
//         {
//             "name": "Mobile",
//             "price": "35000",
//             "model": "one plus",
//             "country": "India"
//         },
//         {
//             "name": "Phone",
//             "price": "12000",
//             "model": "Mi",
//             "country": "japan"
//         },
//         {
//             "name": "Book",
//             "price": "400",
//             "model": "long",
//             "country": "india"
//         }

//     ]
// }