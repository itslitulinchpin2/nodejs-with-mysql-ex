var mysql      = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Lsm5471789@',
    database : 'step'
    //multiStatement : 'false'
  });
  
  db.connect(); //실제 접속이 일어남, db와의 연결을 위함.

  module.exports=db;