-- select "schema.sql called!";
drop database if exists employees_db;
create database employees_db;
-- select "old db dropped, fresh copy created!";
use employees_db;
-- select "Using employees_db";

-- Schemas
create table departments (
    id int not null AUTO_INCREMENT,
    primary key (id),
    name varchar(30)
);
-- select "Created table departments";
create table roles (
    id int not null AUTO_INCREMENT,
    primary key (id),
    title varchar(30),
    salary decimal,
    department_id int,
    foreign key (department_id) references departments(id)
);
-- select "Created table roles";
create table employees (
    id int not null AUTO_INCREMENT,
    primary key (id),
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    foreign key (role_id) references roles(id)
);
-- select "Created table employees";


-- Seeding
insert into departments (name)
values 
    ("IT"),
    ("HR"),
    ("Accounting"),
    ("Shipping"); 
-- select "Inserted departments";
-- select * from departments;
insert into roles (title, salary, department_id)
values 
    ("Junior Software Dev", 100000, 1),
    ("Senior Software Dev", 125000, 1),
    ("Human Resources Sr", 60000, 2),
    ("Human Resources Jr", 50000, 2),
    ("Senior Accountant", 175000, 3),
    ("Junior Accountant", 125000, 3),
    ("Forklift Driver", 200000, 4),
    ("Forklift Wrangler", 225000, 4);
-- select "Inserted into roles";
-- select * from roles;
insert into employees (first_name, last_name, role_id)
values
    ("Alfred", "Wallace", 2),
    ("Jack", "Stauber",   1),
    ("Dexter", "Holland", 3),
    ("Scrimmy", "Bingus", 4),
    ("Mario", "Mario",    7),
    ("Luigi", "Mario",    8),
    ("Natalie", "Knox",   5),
    ("Hyde", "Woods",     6);
-- select "Inserted into employees";
-- select * from employees;
