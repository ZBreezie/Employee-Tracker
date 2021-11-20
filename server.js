const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

// Connection to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'MySQL',
      database: 'employeeDB'
    },
    console.log('Connected to the employee database.')
);

db.connect(function(err) {
    if (err) throw err;
    promptUser();
});

function promptUser() {
    console.log ("ayy lmao")
}