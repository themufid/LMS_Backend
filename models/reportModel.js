const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/reports.json');

const getReports = () => {
  const reports = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return reports;
};

const saveReports = (reports) => {
  fs.writeFileSync(filePath, JSON.stringify(reports, null, 2));
};

const createReport = (userId, courseId, grade, comments) => {
  const reports = getReports();
  const newReport = { id: Date.now(), userId, courseId, grade, comments };
  reports.push(newReport);
  saveReports(reports);
  return newReport;
};

module.exports = { getReports, createReport };
