var mongooose = require('mongoose');
var adminSchema = mongooose.Schema({
    username:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},   
})

module.exports = mongooose.model('admin', adminSchema);