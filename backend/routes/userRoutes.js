const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    try {
        const user = new User({ email, firstName, lastName, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    const users = await User.find({ deleted: false });
    res.json(users);
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { deleted: true });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
