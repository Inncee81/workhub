var express = require('express');
var router = express.Router();
var subscribesControllers = require('../controllers/subscribeController');
router.get('/',subscribesControllers.getAllSubscribers);


module.exports = router;