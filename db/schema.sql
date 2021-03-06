-- resets database upon "source db/schema.sql"
DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

-- sets employeeDB as active database
USE employeeDB;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    roleID INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    employeeID INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY(role_id) REFERENCES role(roleID),
    FOREIGN KEY(manager_id)REFERENCES employee(employeeID)
);