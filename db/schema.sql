-- select "schema.sql called!";
drop database if exists employees_db;
create database employees_db;
-- select "old db dropped, fresh copy created!";
use employees_db;
-- select "Using employees_db";

-- Schemas
create table departments (
    id int not null,
    primary key (id),
    name varchar(30)
);
-- select "Created table departments";
create table roles (
    id int not null,
    primary key (id),
    title varchar(30),
    salary decimal,
    department_id int,
    foreign key (department_id) references departments(id)
);
-- select "Created table roles";
create table employees (
    id int not null,
    primary key (id),
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    foreign key (role_id) references roles(id)
);
-- select "Created table employees";


-- Seeding
insert into departments (id, name)
values 
    (0, "IT"),
    (1, "HR"),
    (2, "Accounting"),
    (3, "Shipping"); 
-- select "Inserted departments";
-- select * from departments;
insert into roles (id, title, salary, department_id)
values 
    (0, "Junior Software Dev", 100000, 0),
    (1, "Senior Software Dev", 125000, 0),
    (2, "Human Resources Sr", 60000, 1),
    (3, "Human Resources Jr", 50000, 1),
    (4, "Senior Accountant", 175000, 2),
    (5, "Junior Accountant", 125000, 2),
    (6, "Forklift Driver", 200000, 3),
    (7, "Forklift Wrangler", 225000, 3);
-- select "Inserted into roles";
-- select * from roles;
insert into employees (id, first_name, last_name, role_id)
values
    (0, "Alfred", "Wallace", 1),
    (1, "Jack", "Stauber",   0),
    (2, "Dexter", "Holland", 2),
    (3, "Scrimmy", "Bingus", 3),
    (4, "Mario", "Mario",    6),
    (5, "Luigi", "Mario",    7),
    (6, "Natalie", "Knox",   4),
    (7, "Hyde", "Woods",     5);
-- select "Inserted into employees";
-- select * from employees;
