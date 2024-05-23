const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/assessments.json');

const getAssessments = () => {
  const assessments = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return assessments;
};

const saveAssessments = (assessments) => {
  fs.writeFileSync(filePath, JSON.stringify(assessments, null, 2));
};

const createAssessment = (courseId, title, description, dueDate) => {
  const assessments = getAssessments();
  const newAssessment = { id: Date.now(), courseId, title, description, dueDate };
  assessments.push(newAssessment);
  saveAssessments(assessments);
  return newAssessment;
};

module.exports = { getAssessments, createAssessment };
