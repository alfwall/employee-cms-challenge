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

async function mainMenu(db) {
    inquirer.prompt(startQuestion)
        .then((answer) => {
            console.log(`Answer was ${answer.main_choice}`)
            switch (answer.main_choice) {
                case "View All Employees":
                    db.query("select id, first_name from employees;",
                        function (err, results) {
                            console.log(err ? err : results);
                        });
                    break;
                case "Add Employee":
                    //console.log("insert into employees");
                    break;
                case "Update Employee Role":
                    //console.log("update employee roles");
                    break;
                case "View All Roles":
                    db.query("select id, title, department_id, salary from roles;", function (err, results) {
                        console.log(err ? err : results);
                    });
                    break;
                case "Add Role":
                    //console.log("insert into roles");
                    break;
                case "View All Departments":
                    db.query("select id, name from departments;", function (err, results) {
                        console.log(err ? err : results);
                    });
                    break;
                case "Add Department":
                    //console.log("insert into departments");
                    break;
                default:
                    throw new Error("Error when selecting main command!")
            }
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`)
        });
}

module.exports = mainMenu;