const { getCourses, createCourse } = require('../models/courseModel');

const getAllCourses = (req, res) => {
  try {
    const courses = getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  try {
    const { title, description, teacherId } = req.body;
    const newCourse = createCourse(title, description, teacherId);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllCourses, create };
