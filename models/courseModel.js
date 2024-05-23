const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/courses.json');

const getCourses = () => {
  const courses = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return courses;
};

const saveCourses = (courses) => {
  fs.writeFileSync(filePath, JSON.stringify(courses, null, 2));
};

const createCourse = (title, description, teacherId) => {
  const courses = getCourses();
  const newCourse = { id: Date.now(), title, description, teacherId };
  courses.push(newCourse);
  saveCourses(courses);
  return newCourse;
};

module.exports = { getCourses, createCourse };
