var cloudinary = require('cloudinary');

exports.upload = function(file){
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, function(result){
            resolve({url: result.secure_url, Id: result.public_id});
        }, {resource_type: "auto"})
   })
}

exports.delete = function(publicId){
    return new Promise(resolve => {
        cloudinary.uploader.destroy(publicId, function(result){
            resolve(result);
        }, {resource_type: "image"})
    })
}

