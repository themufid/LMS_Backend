const { getEnrollments, enrollUser } = require('../models/enrollmentModel');

const getAllEnrollments = (req, res) => {
  try {
    const enrollments = getEnrollments();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const enroll = (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const newEnrollment = enrollUser(userId, courseId);
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllEnrollments, enroll };
