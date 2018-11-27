var mongoose = require('mongoose');

var profilePixSchema = mongoose.Schema({
    userID:{type:String, require:true},
    image: {type: String, required: true},
    imageID: String,
})
module.exports = mongoose.model('profilePicture', profilePixSchema);