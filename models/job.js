var mongoose = require('mongoose');
 var jobSchema = mongoose.Schema({
     username:{type:String, require:true},
     email:{type:String, require:true},
     companyName:String,
     companyDetails:{type:String, require:true},
     jobTitle:{type:String, require:true},
     yearOfExperience:{type:String, require:true},
     jobLocation:{type:String, require:true},
     state:{type:String, require:true},
     academicQualification:{type:String, require:true},
     jobDescription:{type:String, require:true},
     salaryRange:String,
     coordinates: mongoose.SchemaTypes.Mixed,
//without the google coordinates...
    // username:{type:String, require:true},
    // email:{type:String, require:true},
    // companyName:String,
    // companyDetails:{type:String, require:true},
    // jobTitle:{type:String, require:true},
    // yearOfExperience:{type:String, require:true},
    // jobLocation:{type:String, require:true},
    // state:{type:String, require:true},
    // academicQualification:{type:String, require:true},
    // jobDescription:{type:String, require:true},
    // salaryRange:String,
     
 })
 module.exports = mongoose.model('job', jobSchema);