var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sangram',
    database: 'sangram'
});
module.exports = connection;