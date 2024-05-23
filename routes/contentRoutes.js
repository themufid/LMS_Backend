const express = require('express');
const router = express.Router();
const { getAllContents, create } = require('../controllers/contentController');

router.get('/', getAllContents);
router.post('/', create);

module.exports = router;
