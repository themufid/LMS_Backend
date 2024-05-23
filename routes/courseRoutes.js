const express = require('express');
const router = express.Router();
const { getAllCourses, create } = require('../controllers/courseController');

router.get('/', getAllCourses);
router.post('/', create);

module.exports = router;
