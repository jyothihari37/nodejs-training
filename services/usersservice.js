const client = require('../db')

exports.getUsers = async () => {
    const result = await client.query('select * from users')
    return result.rows;
}
exports.getUsersById = async (id) => {
    const result = await client.query(`select * from users where id = ${id}`)
    return result.rows[0];
}
exports.insert = async (users) => {
    try {
        const query = 'insert into users(username,email,mobile,designation,firstname,lastname,status,isdeleted)VALUES($1,$2,$3,$4,$5,$6,$7,$8)'
        const values = [users.username, users.email, users.mobile, users.designation, users.firstname, users.lastname, users.status, users.isdeleted]
        await client.query(query, values)
    }
    catch (err) {
        console.log(err)
        throw 'unable to insert user'
    }
}


// exports.getUsers = () => {

//     return [
//         {
//             firstName: 'Mohana priya',
//             lastName: 'M',
//             email: 'mohana@gmail.com',
//             phone: '323415',
//             designation: 'trainee',
//             status: 'active'
//         },
//         {
//             firstName: ' priyanka',
//             lastName: 'p',
//             email: 'priya@gmail.com',
//             phone: '6789223',
//             designation: 'trainee',
//             status: 'inactive'
//         },

//         {
//             firstName: 'sruthi',
//             lastName: 's',
//             email: 'sruthi@gmail.com',
//             phone: '1010101',
//             designation: 'trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'subha',
//             lastName: 'vellapandi',
//             email: 'subha@gmail.com',
//             phone: '345190',
//             designation: 'trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'pradeep',
//             lastName: 'p',
//             email: 'pradeep@gmail.com',
//             phone: '123456',
//             designation: 'trainee',
//             status: 'inactive'
//         },
//         {
//             firstName: 'sukumar',
//             lastName: 's',
//             email: 'sukumar@gmail.com',
//             phone: '23456',
//             designation: 'trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'venkat',
//             lastName: 'puttamsetti',
//             email: 'venkat@gmail.com',
//             phone: '3234109',
//             designation: 'trainee',
//             status: 'inactive'
//         },
//         {
//             firstName: 'jyothi',
//             lastName: 'saikam',
//             email: 'jyothisaikam@gmail.com',
//             phone: '8465957',
//             designation: 'trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'harish',
//             lastName: 'saikam',
//             email: 'saikam@gmail.com',
//             phone: '13456',
//             designation: 'trainee',
//             status: 'active'
//         },
//         {
//             firstName: 'laxmi',
//             lastName: 'saikam',
//             email: 'laxmi@gmail.com',
//             phone: '9652240',
//             designation: 'trainee',
//             status: 'active'


//         },
//         {

//             firstName: 'maneesha',
//             lastName: 'm',
//             email: 'maneesha@gmail.com',
//             phone: '8465957041',
//             designation: 'trainee',
//             status: 'inactive'
//         },
//         {
//             firstName: 'cinni',
//             lastName: 'thomos',
//             email: 'cinni@gmail.com',
//             phone: '8465957',
//             designation: 'trainee',
//             status: 'Inactive'
//         }
//     ]
// }

