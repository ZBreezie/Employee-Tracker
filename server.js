// Dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');

const PORT = process.env.PORT || 3001;

// Connection to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'MySQL',
      database: 'employeeDB'
    },
    console.log('Connected to the employee database on port 3001.')
);

// If theres an error connecting, throw an error. Otherwise, start the prompt.
db.connect(function(err) {
    if (err) throw err;
    promptUser();
});

function promptUser() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Please choose an option:',
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add A Department",
                "Add A Role",
                "Add An Employee",
                "Update An Employee Role",
            ]
        }).then(answer => {
            console.log ("ayy lmao")
        })
};