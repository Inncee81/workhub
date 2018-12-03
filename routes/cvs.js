var express = require('express');
var router = express.Router();

var cvController = require('../controllers/cvControllers');
router.post('/create', cvController.createCv);
router.post('/search',cvController.searchCv);
router.get('/update/:id', cvController.updateCv);
router.get('/delete/:id',cvController.deleteCV);

module.exports = router;