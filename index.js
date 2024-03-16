const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 5000;

// Open the database
const db = new sqlite3.Database(
  "./dua_main.sqlite",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the database.");
    }
  }
);

// Define a route to handle requests from the frontend
app.get("/category", (req, res) => {
  // Select data from the database
  const sql = `SELECT * FROM category`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Error retrieving data from the database" }); // Provide a more informative error message
    } else {
      // Send the data as a JSON response to the frontend
      res.json(rows);
    }
  });
});
// Define a route to handle requests from the frontend
app.get("/sub_category", (req, res) => {
  // Select data from the database
  const sql = `SELECT * FROM sub_category`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Error retrieving data from the database" }); // Provide a more informative error message
    } else {
      // Send the data as a JSON response to the frontend
      res.json(rows);
    }
  });
});
// Define a route to handle requests from the frontend
app.get("/dua", (req, res) => {
  // Select data from the database
  const sql = `SELECT * FROM dua`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Error retrieving data from the database" }); // Provide a more informative error message
    } else {
      // Send the data as a JSON response to the frontend
      res.json(rows);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
