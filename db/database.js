const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/employees.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the employee database.');
});