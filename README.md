# TodoApp

A simple and responsive To-Do list application built with React, Axios, Node.js, and MongoDB. This app demonstrates basic CRUD operations, allowing users to add, toggle, and delete tasks. It uses Tailwind CSS for styling, providing a clean and modern user interface.

## Features

- **Add To-Do**: Users can add new tasks to the list.
- **Toggle Completion**: Click on a task to toggle its completed status.
- **Delete To-Do**: Remove tasks from the list with a single click.
- **Responsive Design**: The app is styled with Tailwind CSS for a seamless experience on any device.

## Tech Stack

- **Frontend**: React, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todoapp.git
   cd todoapp
   ```
2.  **Install dependencies for the backend and frontend:**

```bash
# Backend dependencies
cd backend
npm install
```
```bash
# Frontend dependencies
cd ../frontend
npm install
```

3. **Start MongoDB:**

Make sure MongoDB is running. If you’re using a local instance, you can start it with:

```bash
mongod
```
4. **Start the backend server:**
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:5000`

5. **Start the frontend development server:**

```bash
cd ../frontend
npm run dev
```
The frontend will start on `http://localhost:3000.`

## Usage
1.Open the app in your browser by navigating to `http://localhost:5173/`
2.Add a new task using the input field and "Add" button.
3.Toggle the completion status of a task by clicking on it.
4.Delete tasks using the "Delete" button.


## Project Structure
- backend/: Contains the Node.js/Express server and MongoDB setup.
- frontend/: Contains the React application.
- models/: Defines the Mongoose schema for the to-do items.
- routes/: Defines the API routes for CRUD operations.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Connect with Me
[GitHub](https://github.com/YeabsiraBezabih)
[LinkedIn](https://www.linkedin.com/in/yeabsira-bezabih) 
[Twitter](https://x.com/YeabsiraBezabih)