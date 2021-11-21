INSERT INTO department (name) 
VALUES 
("Office"),
("Front-End"),
("Produce");

INSERT INTO role (title, salary, department_id) 
VALUES 
("Manager", 30, 1),
("Cashier", 10, 2),
("Stocker", 10, 3),
("Manual Labor", 10, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Kate", "Doogle", 1, null),
("Zach", "Thorpe", 1, null),
("Quade", "Wilson", 3, 2),
("Charles", "Daniels", 4, 2),
("Ryan", "Seacrest", 2, 1),
("Jay", "Walker", 2, 1);