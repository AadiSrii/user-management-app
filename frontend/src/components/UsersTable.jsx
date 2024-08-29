import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SignUpForm from './SignUpForm';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        fetchUsers();
    };

    const handleUserAdded = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setShowSignUpForm(false); // Close the form after adding a user
    };

    return (
        <div>
            <h2>Users</h2>
            <button onClick={() => setShowSignUpForm(true)}>SIGN UP</button>
            {showSignUpForm && <SignUpForm onUserAdded={handleUserAdded} />}
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => deleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
