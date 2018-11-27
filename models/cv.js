var mongoose = require('mongoose');

var cvSchema = mongoose.Schema({
    firstname:{type:String, require:true},
    lastname:{type:String, require:true},
    surname:{type:String, require:true},
    email:{type:String, require:true},
    age:{type:Number, require:true},
    school:String,
    schoolingPeriod:String,
    academicQualification:String,
    yearOfExperience:String,
    careerObjective:String
})

module.exports = mongoose.model('cv',cvSchema);