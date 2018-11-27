var express = require('express');
var router = express.Router();
var ProfilePictureControllers = require('../controllers/ProfilePictureControllers');
var upload = require('../functions/pictureupload');

router.post('/add',upload.any(), ProfilePictureControllers.uploadProfilePicture);
router.post('/view',ProfilePictureControllers.viewProfilePicture);





module.exports = router;