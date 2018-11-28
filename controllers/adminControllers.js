var model = require('../models/admin');
const modelx = require("../models/job");
var bcrypt = require('bcrypt');
exports.CreateAdmin = (req, res)=>{
    try{
        var mail = req.body.email
        model.find({email:mail}, function(err, email){
            if(email.length >= 1){
              res.json({err:err, message:'User Already exists with this email'})
            }else{
                bcrypt.hash(req.body.password,10, function(err, hash){
                    if(err){
                        res.json({err:err, message:'Error encountered while hashing password !!'})
                    }else{
                        var details = {
                            username:req.body.username,
                            email:req.body.email,
                            password:hash
                        }
                        model.create(details, function(err, created){
                            if(created){
                                res.json({message:'Admin was created successfully !!'})
                            }else{
                                res.json({err:err, message:'Admin was not created successfully !!'})
                            }
                        })
                       
                    }
                } )
               
            }
        })
    }catch(exception){
        console.log("error:" + exception);
    }
}

exports.login = (req, res)=>{
    try{
        var mail = req.body.email
        var password = req.body.password
        if((mail !='') && (password !='')){
            model.find({email:mail}, function(err, login){
                if(login.length >= 1){
                    //console.log(login)
                    bcrypt.compare(req.body.password,login[0].password, function(err, ans){
                        if(ans){
                            res.json({message:'Login was successfull',Token:login[0]._id})
                        }else{
                            res.json({err:err, message:'Login was not successful'})
                        }
                    })
                }else{
                    res.json({err:err, message:'Error finding username !!!'})
                }
            })
        }else{
            res.json({message:'Empty fields cannot be submited !!!'})
        }
      
    }catch(exception){
        console.log("error:" + exception);  
    }
}

exports.deleteJob = (req, res)=>{
    try{
       var data = req.params.id
        modelx.findByIdAndDelete({_id:data}, function(err, data){
          if(data){
            res.json({message:'Job was deleted successfully !!'})
          }else{
            res.json({err:err, message:'unable to deleted job'})
          }
        })
    }catch(exception){
      console.log("error:" + exception);
    }
  }
  
