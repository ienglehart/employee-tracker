INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'joe', 'smith', 1, 1),
    (2, 'ben', 'gold', 2, 2);

INSERT INTO role (id, salary, department_id)
VALUES
    (1, 130000, 1 ),
    (2, 17, 2);

INSERT INTO department (id, name)
VALUES
    (1, 'bean counting'),
    (2, 'bean eating');
