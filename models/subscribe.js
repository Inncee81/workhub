var mongoose = require('mongoose');
var subscribeSchema = mongoose.Schema({
    userID:{type:String, required:true},
    JObID:{type:String, required:true},
    jobTitle:{type:String, required:true},
    JObCourse:{type:String, required:true},
    companyName:{type:String, required:true},
    jobyrExp:{type:String, required:true},
    Surname:{type:String, required:true},
    othernames:{type:String, required:true},
    useremail:{type:String, required:true},
    usercourse:String,
    userExp:String

});
module.exports = mongoose.model('subscribe',subscribeSchema)