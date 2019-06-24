//import mysql
var mysql = require('mysql');
//create a database connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MattM',
  database: 'cows'
})

connection.connect();
//only export the connection not the connect()
module.exports = connection;