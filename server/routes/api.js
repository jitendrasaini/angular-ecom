// Module dependencies
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Application initialization
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'angular-ecom'
});

//connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
});


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


// Get categories
router.get('/categories', (req, res) => {
  connection.query('SELECT category_id, category_name FROM categories', function (err, rows, fields) {
    if (err) {
      throw err;
    }
    //console.log(rows);
    response.data = rows;
    return res.json(response.data);
  });
});

// Get products
router.get('/products', (req, res) => {
  connection.query('SELECT * FROM products', function (err, rows, fields) {
    if (err) {
      throw err;
    }
    //console.log(rows);
    response.data = rows;
    return res.json(response.data);
  });
});


//connection.end();

module.exports = router;