const connection = require("./js/connection.js")

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("EmployeeMe: START");
    MainPrompt();
});

const inquirer = require("inquirer");


const startQuestion = [
    {
        name: "main_choice",
        message: "What would you like to do?",
        type: "list",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Exit"
        ]
    }
];

function MainPrompt() {
    inquirer.prompt(startQuestion)
        .then((answer) => {
            console.log(`Answer was ${answer.main_choice}`)
            switch (answer.main_choice) {
                case "View All Employees":
                    ViewAllEmployees();
                    break;
                case "Add Employee":
                    AddAnEmployee();
                    break;
                case "Update Employee Role":
                    UpdateARole();
                    break;
                case "View All Roles":
                    ViewAllRoles();
                    break;
                case "Add Role":
                    AddARole();
                    break;
                case "View All Departments":
                    ViewAllDepartments();
                    break;
                case "Add Department":
                    AddDepartment();
                    break;
                case "Exit":
                    connection.end();
                    break;
                default:
                    throw new Error("Error when selecting main command!")
            }
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`)
        });
}


function ViewAllDepartments() {
    connection.query("select id, name from departments;",
        function (err, results) {
            if (err) {
                console.error(err);
            }
            else {
                console.table(results);
            }
        });
    MainPrompt();
}

async function AddDepartment() {
    console.log("NOT IMPLEMENTED: Add Department");

    MainPrompt();
}

// select id, title, department_id, salary from roles

async function ViewAllRoles() {
    connection.query("select * from roles;",
        function (err, results) {
            if (err) {
                console.error(err);
            }
            else {
                console.table(results);
            }
        });

    MainPrompt();
}

async function AddARole() {
    console.log("NOT IMPLEMENTED: Add a Role")

    MainPrompt();
}

async function UpdateARole() {
    console.log("NOT IMPLEMENTED: Update a Role")

    MainPrompt();
}

async function ViewAllEmployees() {
    connection.query("select * from employees;",
        function (err, results) {
            if (err) {
                console.error(err);
            }
            else {
                console.table(results);
            }
        });

    MainPrompt();
}

async function AddAnEmployee() {
    console.log("NOT IMPLEMENTED: AddAnEmployee")

    MainPrompt();
}
