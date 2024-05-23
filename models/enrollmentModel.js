const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/enrollments.json');

const getEnrollments = () => {
  const enrollments = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return enrollments;
};

const saveEnrollments = (enrollments) => {
  fs.writeFileSync(filePath, JSON.stringify(enrollments, null, 2));
};

const enrollUser = (userId, courseId) => {
  const enrollments = getEnrollments();
  const newEnrollment = { id: Date.now(), userId, courseId };
  enrollments.push(newEnrollment);
  saveEnrollments(enrollments);
  return newEnrollment;
};

module.exports = { getEnrollments, enrollUser };
