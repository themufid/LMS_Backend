const { getTeachers, createTeacher } = require('../models/teacherModel');

const getAllTeachers = (req, res) => {
  try {
    const teachers = getTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  try {
    const { name, email } = req.body;
    const newTeacher = createTeacher(name, email);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllTeachers, create };
