var express = require('express');
var router = express.Router();

var userController = require('../controllers/userControllers');
router.post('/create',userController.CreateUser);


module.exports = router;