const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use JSON middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Connect to MongoDB using Mongoose, targeting a local database named 'todo'
mongoose.connect('mongodb://localhost:27017/todo');

// Define a schema for the 'Todo' model, specifying the fields 'text' and 'completed'
const todoSchema = new mongoose.Schema({
  text: String, // The text of the to-do item
  completed: Boolean, // The completion status of the to-do item
});

// Create a model for the 'Todo' collection based on the defined schema
const Todo = mongoose.model('Todo', todoSchema);

// Define a GET route to fetch all to-do items
app.get('/todos', async (req, res) => {
  // Retrieve all to-do items from the database
  const todos = await Todo.find();
  // Respond with the retrieved to-do items in JSON format
  res.json(todos);
});

// Define a POST route to add a new to-do item
app.post('/todos', async (req, res) => {
  // Create a new to-do item using the request body
  const todo = new Todo({
    text: req.body.text, // Set the text from the request body
    completed: false, // Default the 'completed' status to false
  });
  // Save the new to-do item to the database
  await todo.save();
  // Respond with the newly created to-do item in JSON format
  res.json(todo);
});

// Define a PUT route to toggle the completion status of a to-do item
app.put('/todos/:id', async (req, res) => {
  // Find the to-do item by its ID from the request parameters
  const todo = await Todo.findById(req.params.id);
  // Toggle the 'completed' status
  todo.completed = !todo.completed;
  // Save the updated to-do item to the database
  await todo.save();
  // Respond with the updated to-do item in JSON format
  res.json(todo);
});

// Define a DELETE route to remove a to-do item by its ID
app.delete('/todos/:id', async (req, res) => {
  // Find and delete the to-do item by its ID from the request parameters
  const result = await Todo.findByIdAndDelete(req.params.id);
  // Respond with the result of the deletion in JSON format
  res.json(result);
});

// Start the server on port 5000 and log a message when it's running
app.listen(5000, () => console.log('Server started on port 5000'));
