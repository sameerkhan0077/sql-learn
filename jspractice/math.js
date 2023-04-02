const mysql = require('mysql2');

var con =mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "mysql@123",
    database:"coding"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    // con.query("CREATE DATABASE mydb", function (err, result) {  //! DB CREATED
    // var sql = "create table frontend (name varchar(25), add varchar(30))";//!TABLE CREATED
    // var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"; //! ALTER UPDATE
    // var sql ="INSERT INTO customers (name , address) VALUES ('HUSSAIN' , 'MERTA CITY')"; //! for 1
    var sql ="INSERT INTO customers (name , address) VALUES ?";
    var values =[
        ["mazeed" ,"merta city"],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98']
    ]
    
    con.query(sql ,[values], function(err , result){
       if(err) throw err;
       console.log("DATA INSERTED" ,result); 
    })
});