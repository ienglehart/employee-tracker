const express = require('express');
const router = express.Router();
const db = require('../db/database');
const inputCheck = require('../utils/inputCheck');

// Get all employee
router.get('/employee', (req, res) => {
  const sql = `SELECT * FROM employee`;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});


//create an employee
router.post('/employee', ({body}, res) => {
    // Data validation 
    const errors = inputCheck(body, 'first_name', 'last_name', 'email');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    
    const sql = `INSERT INTO employee ( id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)`;
    const params = [body.id, body.first_name, body.last_name, body.role_id, body.manager_id];
    // use ES5 function, not arrow to use this 
    db.run(sql, params, function(err, data) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: body,
        id: this.lastID
      });
    });
});

//update an employee
router.put('/employee/:id', (req, res) => {
    // Data validation 
    const errors = inputCheck(req.body, 'role_id');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
    // function,not arrow, to use this
    db.run(sql, params, function(err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: req.body,
        changes: this.changes
      });
    });
});