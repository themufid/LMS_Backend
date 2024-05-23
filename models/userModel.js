const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const filePath = path.join(__dirname, '../data/users.json');

const getUsers = () => {
  const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return users;
};

const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const registerUser = async (username, email, password, role) => {
  const users = getUsers();
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), username, email, password: hashedPassword, role };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

const loginUser = async (email, password) => {
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }
  throw new Error('Invalid credentials');
};

module.exports = { registerUser, loginUser, getUsers };
