const express = require('express');
const router = express.Router();
const { getAllAssessments, create } = require('../controllers/assessmentController');

router.get('/', getAllAssessments);
router.post('/', create);

module.exports = router;
