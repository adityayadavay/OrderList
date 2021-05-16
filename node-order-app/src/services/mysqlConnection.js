import mysql from "mysql";

const mySqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "@Test123",
  database: "localDB",
  multipleStatements: true,
  connectTimeout: 1000000,
  dateStrings: true,
});

mySqlConnection.connect((error) => {
  if (error) {
    throw error;
  }
});

export default mySqlConnection;
