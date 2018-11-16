var express = require('express');
var router = express.Router();

var userController = require('../controllers/userControllers');
router.post('/create',userController.CreateUser);
router.post('/verify',userController.verifyUser);
router.post('/login', userController.userlogin);


module.exports = router;