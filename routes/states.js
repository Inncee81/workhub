var express = require('express');
var router = express.Router();

var stateController = require('../controllers/stateControllers');
router.post('/create',stateController.createStateCategory);
router.get('/',stateController.viewAllStates);

module.exports = router