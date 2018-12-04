var model = require('../models/subscribe');
var users = require('../models/user');
var cv = require('../models/cv');
exports.getAllSubscribers = (req,res)=>{
    try{
        model.find({},function(err, output){
            if(output.length >= 1){
                res.json({output});
            }else{
                res.json({err:err, message:'Sorry no job found !!'})
            }
        })
    }catch(exception){
        console.log('error:'+ exception);
    }
}