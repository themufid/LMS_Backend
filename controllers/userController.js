const { registerUser, loginUser, getUsers } = require('../models/userModel');

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = await registerUser(username, email, password, role);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getAllUsers = (req, res) => {
  try {
    const users = getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, getAllUsers };
