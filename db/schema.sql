drop database if exists employees_db;
create database employees_db;

use employees_db;

create table department (
    id int not null primary key,
    name varchar(30) not null
);

create table role (
    id int not null primary key,
    title varchar(30) not null,
    salary decimal not null,
    department_id int not null,
    foreign key (department_id) references department(id)
);

create table employee (
    id int not null primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int,
    foreign key role_id references role(id)
);