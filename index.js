const inquirer = require('inquirer');
const cTable = require('console.table'); 
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/employees.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the employee database.');
  startTracker();
});


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
        .then((answers) => {
            const {prompt1} = answers;
            if(prompt1 === "view employees"){
                viewEmployees();
            }
            else if(prompt1 === "view roles"){
                viewRoles();
            }
            else if(prompt1 === "view departments"){
                viewDepartments();
            }
            else if(prompt1 === "view employees by department"){
                viewEmployeesByDept();
            }
        })
};

function viewEmployees(){
    console.log("viewing employees:");
    var sql = "SELECT * FROM employee"
    db.all(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
    })
};

function viewRoles(){
    console.log("viewing roles:");
    var sql = "SELECT * FROM role"
    db.all(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
    })
}

function viewDepartments(){
    console.log("viewing departments:");
    var sql = "SELECT * FROM department"
    db.all(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
    })
}

