insert into department (id, name)
values 
    (0, "IT"),
    (1, "HR"),
    (2, "Accounting"),
    (3, "Shipping");

insert into role (id, title, salary, department_id)
values 
    (0, "Junior Software Developer", 100000, 0),
    (1, "Senior Software Developer", 125000, 0),
    (2, "Human Resources Lead Coordinator", 60000, 1),
    (3, "Human Resources Coordinator", 50000, 1),
    (4, "Senior Accountant", 175000, 2),
    (5, "Junior Accountant", 125000, 2),
    (6, "Forklift Driver", 200000, 3),
    (7, "Forklift Wrangler", 225000, 3);


insert into employee (id, first_name, last_name, role_id, manager_id)
values
    (0, "Alfred", "Wallace", 1, null),
    (1, "Jack", "Stauber", 0, 0),
    (2, "Dexter", "Holland", 2, null),
    (3, "Scrimmy", "Bingus", 3, 2),
    (4, "Mario", "Mario", 8, null),
    (5, "Luigi", "Mario", 7, 4),
    (6, "Natalie", "Knox", 4, null),
    (7, "Hyde", "Woods", 5, 6);