INSERT INTO department (name) 
VALUES 
("Office"),
("Front-End"),
("Produce");

INSERT INTO role (title, salary, department_id) 
VALUES 
("Manager", 60000, 1),
("Cashier", 30000, 2),
("Stocker", 30000, 3),
("Manual Labor", 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Kate", "Doogle", 1, null),
("Zach", "Thorpe", 1, null),
("Quade", "Wilson", 3, 2),
("Charles", "Daniels", 4, 2),
("Ryan", "Seacrest", 2, 1),
("Jay", "Walker", 2, 1);