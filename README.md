# Employee CMS

## Description
Command-line app to manage an employee database with Node.js, Inquirer, and MySQL.

## The Result
[Click here for the video demo!](LINK_TO_GOOGLEDRIVE_HERE)

## Credits
- [npm inquirer](https://www.npmjs.com/package/inquirer)

## USER STORY
AS A business owner,
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.

## ACCEPTANCE CRITERIA
GIVEN a command-line application that accepts user input...

WHEN I start the application,
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

WHEN I choose to view all departments,
THEN I am presented with a formatted table showing department names and department ids.

WHEN I choose to view all roles,
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role.

WHEN I choose to view all employees,
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

WHEN I choose to add a department,
THEN I am prompted to enter the name of the department and that department is added to the database.

WHEN I choose to add a role,
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.

WHEN I choose to add an employee,
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

WHEN I choose to update an employee role,
THEN I am prompted to select an employee to update and their new role and this information is updated in the database.


## TODO
- [x] Make this README
- [x] SQL
    - [x] schema.sql 
        - [x] department (id INT PRIMARY KEY, name VARCHAR(30))
        - [x] role (id INT PRIMARY KEY, title VARCHAR(30), salary DECIMAL, department_id INT)
        - [x] employee (id INT PRIMARY KEY, first_name VARCHAR(30), last_name VARCHAR(30), role_id INT, manager_id INT)
    - [x] seeds.sql
        - [x] Make some dummy data

- [ ] Inquirer
    - [ ] View All Departments, 
        - [ ] Display formatted table with dept_name and id
    - [ ] View All Roles, 
        - [ ] Display formatted table with job_title, role_id, department, and role_salary
    - [ ] View All Employees, 
        - [ ] Display formatted table with id, first_name, last_name, job_title, department, salary, and reporting manager
    - [ ] Add a Department, 
        - [ ] Enter a name
    - [ ] Add a Role,
        - [ ] Enter name, salary, and department to the database
    - [ ] Add an Employee, 
        - [ ] Enter first_name, last_name, role, manager (optional)
    - [ ] and Update an Employee Role.
        - [ ] Select employee,
        - [ ] Select role

- EXTRA CREDIT!
    - [ ] Update employee managers!
    - [ ] View employees _by manager_
    - [ ] View employees _by department_
    - [ ] DELETE:
        - [ ] Departments
        - [ ] Roles
        - [ ] Employees
    - [ ] Calculate the total utilized budget of a specific department (count employees, use roles to get salaries, totalled)

- [ ] Video demo
    -  [ ] Record video demo
        - [ ] NO MORE THAN 2 MINUTES
        - [ ] Demonstrate ALL acceptance criteria being met
        - [ ] Include link to recording in README
        - [ ] Include link to recording in Submission