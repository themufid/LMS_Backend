const { getAssessments, createAssessment } = require('../models/assessmentModel');

const getAllAssessments = (req, res) => {
  try {
    const assessments = getAssessments();
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  try {
    const { courseId, title, description, dueDate } = req.body;
    const newAssessment = createAssessment(courseId, title, description, dueDate);
    res.status(201).json(newAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllAssessments, create };
