const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/teachers.json');

const getTeachers = () => {
  const teachers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return teachers;
};

const saveTeachers = (teachers) => {
  fs.writeFileSync(filePath, JSON.stringify(teachers, null, 2));
};

const createTeacher = (name, email) => {
  const teachers = getTeachers();
  const newTeacher = { id: Date.now(), name, email };
  teachers.push(newTeacher);
  saveTeachers(teachers);
  return newTeacher;
};

module.exports = { getTeachers, createTeacher };
