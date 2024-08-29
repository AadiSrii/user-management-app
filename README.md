# User Management Application

This is a simple user management application that allows users to manage their information, including adding new users, listing existing users, deleting users, and exporting user data. The application is built using React for the frontend and Node.js for the backend, with MongoDB Atlas as the database.

## Features

- List all users in a table
- Add new users via a sign-up form
- Delete users from the list
- Export user data in CSV format
- Responsive and modern design

## Technologies Used

- **Frontend:** React.js, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB Atlas account

### Setup MongoDB Atlas

1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Set up a new cluster and create a database called `user_management`.
3. Create a collection called `users`.
4. Obtain the connection string (URI) for your MongoDB Atlas database.

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd user-management-app/backend

Install dependencies: npm install

Create a .env file in the backend directory: 
MONGO_URI=<your-mongodb-atlas-connection-string>
PORT=5000

Start the backend server: npm start
The backend server will run on http://localhost:5000.

*Frontend Setup* 

Navigate to the frontend directory: cd ../frontend

Install dependencies: npm install

Start the frontend development server: npm run dev

The frontend application will run on http://localhost:3000.

**Usage**
Open your web browser and navigate to http://localhost:3000 to access the application.
You can view the list of users, add new users via the sign-up form, delete users, and export user data.

**API Endpoints**
Users
POST /api/users - Add a new user
GET /api/users - Retrieve the list of users
DELETE /api/users/:id - Delete a user by ID

**Additional Notes**
Ensure your MongoDB Atlas cluster is set to allow connections from your IP address.
You may need to adjust CORS settings in the backend if you're running into issues with cross-origin requests.

**License**
This project is licensed under the AadiSrii.






