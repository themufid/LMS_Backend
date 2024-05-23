const { getReports, createReport } = require('../models/reportModel');

const getAllReports = (req, res) => {
  try {
    const reports = getReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  try {
    const { userId, courseId, grade, comments } = req.body;
    const newReport = createReport(userId, courseId, grade, comments);
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllReports, create };
