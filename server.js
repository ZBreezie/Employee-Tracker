// Dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

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
            if (answer.action === "View All Departments") {
                viewDepartments();
            } else if (answer.action === "View All Roles") {
                viewRoles();
            } else if (answer.action === "View All Employees") {
                viewEmployees();
            } else if (answer.action === "Add A Department") {
                addDepartment();
            } else if (answer.action === "Add A Role") {
                addRole();
            } else if (answer.action === "Add An Employee") {
                addEmployee();
            } else if (answer.action === "Update An Employee Role") {
                updateRole();
            }
        })
};

// function to view departments
function viewDepartments() {
    console.log('Viewing Departments');
        
    var query = 'SELECT * FROM department';
        
        db.query(query, function (err, res) {
            if (err) throw err;
            var departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            promptUser()
        });
}

// function to view roles
function viewRoles() {
    console.log('Viewing Roles');
        
    var query = 'SELECT * FROM role';
        
        db.query(query, function (err, res) {
            if (err) throw err;
            var roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            promptUser()
        });
}

// function to view list of employees
function viewEmployees() {
    console.log('Viewing Employees');
        
    var query = 'SELECT * FROM employee';
        
        db.query(query, function (err, res) {
            if (err) throw err;
            var employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            promptUser()
        });
}

// function to add a new department
async function addDepartment() {
    let answer = await inquirer.prompt([
        {
            name: 'departmentName',
            type: 'input',
            message: 'What is the name of the new department?'
        }
    ]).then(answer => {
        db.query("INSERT INTO department SET ?", {
            name: answer.departmentName
        });
        console.log("Department added!")
    });
    promptUser()
}

// function to add new roles
async function addRole() {
    let answer = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the name of the new role?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What salary will this role be paid?'
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'What department ID # is this role a part of?',
        }
    ]);
    let newRole = db.query("INSERT INTO role SET ?", {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.departmentId
    }, console.log("Role added!"))
    promptUser()
}

// function to add new employees
async function addEmployee() {
    let answer = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of the employee?'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of the employee?'
        },
        {
            name: 'roleID',
            type: 'input',
            message: 'What is the role ID # for this employee?',
        },
        {
            name: 'managerID',
            type: 'input',
            message: 'What is the manager ID # for this employee?',
        }
    ]);
    let newEmployee = db.query("INSERT INTO employee SET ?", {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleID,
        manager_id: answer.managerID
    }, console.log("Employee added!"))
    promptUser()
}

// function to update an employees given role
async function updateRole() {

    let sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

    let answer = await inquirer.prompt([
        {
            name: 'employeeID',
            type: 'input',
            message: 'Which employee would you like to update? (Please select a valid employee ID #)'
        },
        {
            name: 'roleID',
            type: 'input',
            message: 'Which role ID would you like to give them? (Please select a valid role ID #)'
        },
    ])
    
    let data = [answer.roleID, answer.employeeID];
    db.query(sql, data)
    promptUser()
}