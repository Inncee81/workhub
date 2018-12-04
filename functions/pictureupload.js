var multer = require('multer');

//Specifying the storage path for the movie
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, './files/images/');
        }else{
            cb({message: 'The file is not a image file'}, false);
        }
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

var upload = multer({storage: storage});

module.exports = upload;