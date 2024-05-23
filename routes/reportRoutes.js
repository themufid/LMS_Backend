const express = require('express');
const router = express.Router();
const { getAllReports, create } = require('../controllers/reportController');

router.get('/', getAllReports);
router.post('/', create);

module.exports = router;
