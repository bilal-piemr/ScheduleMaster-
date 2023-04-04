var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 4306,
  user     : 'root',
  password : '12345',
  database : 'project',
  multipleStatements: true

});

connection.connect((err)=>{
  if(err)
  {
    console.log("connection failed" + " " + err);
  }else{
    console.log("Connection Successful");
  }

});


module.exports = connection;