const mysql = require("mysql2")

const pool = mysql.createPool({
 host: "dbcra",
 user: "root",
 database: "node-complete",
 password: "nodecomplete",
})

module.exports = pool.promise()
