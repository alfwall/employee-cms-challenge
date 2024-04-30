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
            "Add Department"
        ]
    }
];

async function MainPrompt(db) {
    inquirer.prompt(startQuestion)
        .then((answer) => {
            console.log(`Answer was ${answer.main_choice}`)
            switch (answer.main_choice) {
                case "View All Employees":
                    ViewAllEmployees(db);
                    break;
                case "Add Employee":
                    AddAnEmployee(db);
                    break;
                case "Update Employee Role":
                    UpdateARole(db);
                    break;
                case "View All Roles":
                    ViewAllRoles(db);
                    break;
                case "Add Role":
                    AddARole(db);
                    break;
                case "View All Departments":
                    ViewAllDepartments(db);
                    break;
                case "Add Department":
                    AddDepartment(db);
                    break;
                default:
                    throw new Error("Error when selecting main command!")
            }
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`)
        });
}


async function ViewAllDepartments(db) {
    db.query("select id, name from departments;",
        function (err, results) {
            if (err) {
                console.error(err);
            }
            else {
                console.table({ results });
            }
        });
    MainPrompt();
}

async function AddDepartment(db) {
    console.log("NOT IMPLEMENTED: Add Department");

    MainPrompt();
}

// select id, title, department_id, salary from roles

async function ViewAllRoles(db) {
    db.query("select * from roles;",
        function (err, results) {
            if (err) {
                console.error(err);
            }
            else {
                console.table({ results });
            }
        });

    MainPrompt();
}

async function AddARole(db) {
    console.log("NOT IMPLEMENTED: Add a Role")

    MainPrompt();
}

async function UpdateARole(db) {
    console.log("NOT IMPLEMENTED: Update a Role")

    MainPrompt();
}

async function ViewAllEmployees(db) {
    db.query("select * from employees;",
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

async function AddAnEmployee(db) {
    console.log("NOT IMPLEMENTED: AddAnEmployee")

    MainPrompt();
}





module.exports = MainPrompt;