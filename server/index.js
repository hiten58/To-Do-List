const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL pool configuration
const pool = new Pool({
  user: 'postgres', // your PostgreSQL username
  host: 'localhost',
  database: 'todoapp', // your database name
  password: 'manager1', // your PostgreSQL password
  port: 5432,
});

// Route to add a new task
app.post("/api/tasks", async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  try {
    const newTask = await pool.query(
      "INSERT INTO tasks (task) VALUES ($1) RETURNING *",
      [task]
    );
    res.status(201).json(newTask.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
