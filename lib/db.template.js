//버전 관리에서 보안을 위한 코드

var mysql      = require('mysql');

var db = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
  });
  
  db.connect(); //실제 접속이 일어남, db와의 연결을 위함.

  //module.exports=db;