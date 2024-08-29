import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = ({ onUserAdded }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/users', {
                email,
                firstName,
                lastName,
                password,
            });
            onUserAdded(response.data); // Call the callback to refresh the user list
            resetForm();
        } catch (err) {
            setError(err.response?.data?.error || 'Error adding user');
        }
    };

    const resetForm = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    };

    return (
        <div>
            <h3>Sign Up</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
                <button type="button" onClick={resetForm}>Cancel</button>
            </form>
        </div>
    );
};

export default SignUpForm;
