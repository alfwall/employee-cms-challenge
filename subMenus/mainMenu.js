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

async function mainMenu() {
    inquirer.prompt(startQuestion)
        .then((answer) => {
            console.log(`Answer was ${answer.main_choice}`)
            switch (answer.main_choice) {
                case "View All Employees":
                    console.log("select * from employees");
                    break;
                case "Add Employee":
                    console.log("insert into employees");
                    break;
                case "Update Employee Role":
                    console.log("update employee roles");
                    break;
                case "View All Roles":
                    console.log("select * from roles");
                    break;
                case "Add Role":
                    console.log("insert into roles");
                    break;
                case "View All Departments":
                    console.log("select * from departments");
                    break;
                case "Add Department":
                    console.log("insert into departments");
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