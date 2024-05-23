const { getContents, createContent } = require('../models/contentModel');

const getAllContents = (req, res) => {
  try {
    const contents = getContents();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  try {
    const { courseId, title, description, contentUrl } = req.body;
    const newContent = createContent(courseId, title, description, contentUrl);
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllContents, create };
