DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
    id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
  CONSTRAINT fk_man FOREIGN KEY (manager_id) REFERENCES emplyee(id)
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    salary DECIMAL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM role;
