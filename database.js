const { 
    createPool
} = require('mysql');

const pool = createPool ({
    host: "sql6.freesqldatabase.com",
    user: "sql6511520",
    password: "Uy7KuJFEkt",
    database: "sql6511520",
    connectionLimit: 5
})

pool.query(`select * from users`,(err, result, fields) => {
    if(err) {
        return console.log(err);
    }
    console.log(result);
})

module.exports = pool;