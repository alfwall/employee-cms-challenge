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

function AddDepartment() {
    const newDeptQuestion = [
        {
            name: "deptName",
            message: "What is the new department called?",
            type: "input",
            validate: someName => {
                if (someName) {
                    return true;
                }
                return "Please enter a name.";
            }
        }
    ];
    inquirer.prompt(newDeptQuestion).then((answer) => {
        connection.query(`insert into departments (name) values ('${answer.deptName}')`,
            function (err, results) {
                if (err) {
                    throw err;
                }
                console.log(`Department "${answer.deptName}" added.`)
                MainPrompt();
            })
    });
}

// select id, title, department_id, salary from roles
function ViewAllRoles() {
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

function AddARole() {
    connection.query("select id, name from departments;",
        function (err, departmentsThatExist) {
            if (err) {
                console.error(err);
            }
            else {
                console.log("DEPARTMENTS THAT EXIST")
                console.log(departmentsThatExist)
                let depts;
                let deptNames = Array.from(departmentsThatExist, (x) => `${x["name"]}`);
                const questions = [
                    {
                        name: "name",
                        type: "input",
                        message: "What is the role called?",
                        validate: (roleName) => {
                            if (roleName.length == 0) {
                                console.log("Empty string!")
                                return false;
                            }
                            return true;
                        }
                    },
                    {
                        name: "salary",
                        type: "number",
                        message: "What is the salary?",
                        validate: salary => {
                            try {
                                parseInt(salary);
                                return true;
                            }
                            catch (Error) {
                                return "Enter a number.";
                            }
                        }
                    },
                    {
                        name: "chosenDepartment",
                        type: "list",
                        message: "What department is it in?",
                        choices: deptNames
                    }
                ];
                console.log("TIME TO ASK")
                inquirer.prompt(questions)
                    .then((answer) => {
                        console.log(`ANSWER: ${JSON.stringify(answer)}`)
                        let departmentID;
                        for (let dept in departmentsThatExist) {
                            console.log(`Is "${answer.chosenDepartment}" the same dept as "${dept["name"]}"?`)
                            if (answer.chosenDepartment === dept["name"]) {
                                departmentID = dept["id"];
                                console.log(`Department was ${dept}, id #${departmentID}`)
                                break;
                            }
                        }
                        if (departmentID == null) {
                            console.log(departmentsThatExist)
                            console.log(`Chosen department was "${answer.chosenDepartment}"`)
                            throw Error("didn't find the department :/")
                        }

                        connection.query(`insert into roles (title, salary, department_id) values ("${answer.name}", ${answer.salary}, ${departmentID})`,
                            function (err) {
                                if (err) {
                                    throw err;
                                }
                                console.log(`Successfully added new role "${answer.name}".`)
                                MainPrompt();
                            });

                    });

            }

        });


}

function UpdateARole() {
    console.log("NOT IMPLEMENTED: Update a Role")

    MainPrompt();
}

function ViewAllEmployees() {
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

function AddAnEmployee() {
    console.log("NOT IMPLEMENTED: AddAnEmployee")

    MainPrompt();
}
