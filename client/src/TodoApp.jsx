import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the TodoApp component
function TodoApp() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  // State to hold the current text input value
  const [text, setText] = useState('');

  // useEffect hook to fetch todos from the server when the component mounts
  useEffect(() => {
    // Make a GET request to fetch todos from the server
    axios.get('http://localhost:5000/todos')
      .then(res => setTodos(res.data)) // Update state with the fetched todos
      .catch(err => console.error(err)); // Log any errors to the console
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to add a new todo
  const addTodo = () => {
    // Check if the input text is not empty after trimming whitespace
    if (text.trim()) {
      // Make a POST request to add the new todo to the server
      axios.post('http://localhost:5000/todos', { text })
        .then(res => setTodos([...todos, res.data])) // Add the new todo to the state
        .catch(err => console.error(err)); // Log any errors to the console
      // Clear the input field
      setText('');
    }
  };

  // Function to toggle the completed status of a todo
  const toggleTodo = (id) => {
    // Make a PUT request to toggle the todo's completed status on the server
    axios.put(`http://localhost:5000/todos/${id}`)
      .then(res => {
        // Update the state with the modified todo
        const updatedTodos = todos.map(todo =>
          todo._id === id ? res.data : todo // Replace the toggled todo in the array
        );
        setTodos(updatedTodos); // Update state with the new todos array
      })
      .catch(err => console.error(err)); // Log any errors to the console
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    // Make a DELETE request to remove the todo from the server
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id))) // Remove the deleted todo from state
      .catch(err => console.error(err)); // Log any errors to the console
  };

  // Render the UI
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">To-Do List</h1>
      
      {/* Input field and add button */}
      <div className="flex mb-6">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)} // Update text state as the user types
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <button 
          onClick={addTodo} 
          className="ml-3 p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>

      {/* List of todos */}
      <ul className="list-none">
        {todos.map(todo => (
          <li 
            key={todo._id} 
            className="flex items-center justify-between mb-4 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors"
          >
            {/* Display todo text, with strikethrough if completed */}
            <span
              className={`flex-grow text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'} cursor-pointer`}
              onClick={() => toggleTodo(todo._id)} // Toggle todo completion on click
            >
              {todo.text}
            </span>

            {/* Delete button */}
            <button 
              onClick={() => deleteTodo(todo._id)} 
              className="ml-4 p-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
