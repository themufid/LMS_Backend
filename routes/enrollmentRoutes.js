const express = require('express');
const router = express.Router();
const { getAllEnrollments, enroll } = require('../controllers/enrollmentController');

router.get('/', getAllEnrollments);
router.post('/', enroll);

module.exports = router;
