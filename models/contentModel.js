const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/contents.json');

const getContents = () => {
  const contents = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return contents;
};

const saveContents = (contents) => {
  fs.writeFileSync(filePath, JSON.stringify(contents, null, 2));
};

const createContent = (courseId, title, description, contentUrl) => {
  const contents = getContents();
  const newContent = { id: Date.now(), courseId, title, description, contentUrl };
  contents.push(newContent);
  saveContents(contents);
  return newContent;
};

module.exports = { getContents, createContent };
