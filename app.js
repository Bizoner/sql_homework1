/**
 * Created by gadyez on 09/11/2017.
 */

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var software_fields = "CREATE TABLE software_fields (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), field VARCHAR(255))";
    var projects = "CREATE TABLE projects (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), manager_name VARCHAR(255))";
    var engineers = "CREATE TABLE engineers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), years_exp INT)";
    con.query(software_fields, function (err, result) {
        if (err) throw err;
        console.log("software_fields Table created");
    });
    con.query(projects, function (err, result) {
        if (err) throw err;
        console.log("projects Table created");
    });
    con.query(engineers, function (err, result) {
        if (err) throw err;
        console.log("engineers Table created");
    });
});