var model = require('../models/user');
var bcrypt = require('bcrypt');
var mailer = require('../functions/mailer');

exports.CreateUser = (req,res)=>{
    try{

    mails = { email : req.body.email};
    // count = {min:100,max:1000}
    randx = Math.floor(Math.random() * 20000);
    console.log(randx);
    
    model.find(mails, (err, mails)=>{
        if(mails.length>=1){
            res.json({err:err, message:'User Already Exists!!'});
        }else{
            bcrypt.hash(req.body.password, 10 , function(err,hash){
                if(err){
                    res.json({err:err, message:'Error Encountered during password hash !!'})
                }else{
                    var details = {
                        firstname:req.body.firstname,
                        lastname:req.body.lastname,
                        email:req.body.email,
                        status:req.body.status,
                        verify:false,
                        statusCode:randx,
                        password:hash
                        
                    }
                    var subject = 'Hello ' + details.firstname + ',';
                    var mailBody = `We're really excited for you to join our online Job community. 
                    You account creation was successfully made`

                    model.create(details, (err,details)=>{
                        if(details){
                            mailer.UserAdded(details.email,details.statusCode, subject, mailBody, function (err, info) {
                                if(info){
                                    res.json({message:'Email Registeration Successfully !!'});

                                }else{
                                    res.json({err:err,message:'Error Sending Email to user' })
                                }
                            })
                            res.json({message:'User Registeration Successfully !!'});


                        }else{
                            res.json({err:err,message:'User Registration was not successfully !!'});
                        }
                    })
                }
            })
           


        }

    })


    }catch(exception){
        console.log('error:'+ exception);
    }
}