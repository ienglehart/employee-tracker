const inquirer = require('inquirer');
const mysql = require('mysql'); 
const { listenerCount } = require('./db/database');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3001
})

function startTracker() {
    inquirer 
        .prompt({
            type: "list",
            name: "prompt1",
            message: "how can i help you",
            choices: [
                "view employees",
                "view roles",
                "view departments",
                "view employees of a department",
                "add an employee",
                "add a department",
                "add a role",
                "update an employee"

            ]
        })
        .then(function({ prompt1 }) {
            if(prompt1 === "view employees"){
                viewEmployees();
            }
        })
};

function viewEmployees(){
    console.log("viewing employees:");
    sqlStr = "SELECT * FROM employees"
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result);
    })
};