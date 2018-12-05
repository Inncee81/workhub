var express = require('express');
var router = express.Router();

var userController = require('../controllers/userControllers');
router.post('/create',userController.CreateUser);
router.post('/verify',userController.verifyUser);
router.post('/login', userController.userlogin);
router.get('/apply/:id',userController.userApplyJob);
router.get('/relatedJobs/:id', userController.UserViewJobByQualification);


module.exports = router;