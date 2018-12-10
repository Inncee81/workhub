var express = require('express');
var router = express.Router();

var jobControllers = require('../controllers/jobControllers')
router.post('/create', jobControllers.createJob);
router.get('/delete/:id', jobControllers.deleteJob);
router.post('/search',jobControllers.SearchJobs);
router.get('/',jobControllers.viewAllJobs);



module.exports = router;