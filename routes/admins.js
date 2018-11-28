var express = require('express');
var router = express.Router();

var adminController = require('../controllers/adminControllers');
router.post('/create', adminController.CreateAdmin);
router.post('/logins',adminController.login);
router.get('/delete/:id', adminController.deleteJob);

module.exports = router;