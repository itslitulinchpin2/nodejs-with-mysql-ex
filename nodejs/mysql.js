var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Lsm5471789@',
  database : 'step'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
    console.log("error: ", error);
  }
  console.log("results: ", results);
});
 
connection.end();