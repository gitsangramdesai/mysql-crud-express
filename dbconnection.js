var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'xdba',
    password: 'Sangram@123',
    database: 'play'
});
module.exports = connection;