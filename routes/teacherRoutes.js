const express = require('express');
const router = express.Router();
const { getAllTeachers, create } = require('../controllers/teacherController');

router.get('/', getAllTeachers);
router.post('/', create);

module.exports = router;
