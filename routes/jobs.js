var express = require('express');
var router = express.Router();

var jobControllers = require('../controllers/jobControllers')
router.post('/create', jobControllers.createJob);

module.exports = router;