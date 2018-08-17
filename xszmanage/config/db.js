var mysql = require('mysql');

var connection  = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'xsz',
   port:'3306',
   multipleStatements: true
});

connection.connect();

module.exports = connection;
