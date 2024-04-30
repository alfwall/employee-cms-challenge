const mainMenu = require("./js/mainMenu.js");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "employees_db"
    },
    console.log("Connected to employees_db!")
);

async function Init() {
    await mainMenu(db);
}

Init();