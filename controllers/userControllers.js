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

exports.verifyUser = (req,res)=>{
    try{
        var mail = { email:req.body.email};
        var statusCodex  = { statusCode:req.body.statusCode};
        model.find(mail, (err,mail)=>{
            if(mail.length >=1){
                if(mail[0].verify == false){
                var codex = mail[0].statusCode;                
                if(JSON.stringify (statusCodex).includes(JSON.stringify(codex)) ){
                model.findOneAndUpdate({email:req.body.email},{verify:true}, (err, status)=>{
                    if(status){
                        res.json({message:'Account verification Successfull , please proceed to login!!'})
                    }else{
                        res.json({err:err, message:'Error Encountered While Verifying user !!'})
                    }
                })
            }else{
                res.json({message:'Sorry Code Inserted Does not match with the code sent to you !! '});
            }
              }else{
                res.json({message:'Sorry Your Account has already been comfirmed !! '})
              }
            }else{
                res.json({message:'Sorry such email has not yet been registered !!!'})
            }
        })
    }catch(exception){
        console.log('error:'+ exception);
    }
}

exports.userlogin = (req, res)=>{
    try{
        var mail = {email:req.body.email};
        var password ={password:req.body.password};
        model.find(mail, (err, login)=>{
            if(login.length>=1){
                if(login[0].verify == true){
                    if(login[0].status == 'Employer'){
                        bcrypt.compare(req.body.password, login[0].password,function(err, set){
                            if(set){
                                res.json({message:'You Are logged in as Employer ' , token:{_id:login[0]._id, mail, status:login[0].status}  });
                               
                            }else{
                                res.json({message:'email or password inserted is incorrect'});
                            }
                        } )
                    }else{
                        bcrypt.compare(req.body.password, login[0].password,function(err, sets){
                            if(sets){
                                res.json({message:'You Are logged in as Job seeker ', token:{_id:login[0]._id, mail, status:login[0].status}  })
                            }else{
                                res.json({message:'email or password inserted is incorrect'});
                            }
                        } )  
                    }
                }else{
                    res.json({message:'Please complete your account verification before loggin in '})
                }
            }else{
                res.json({err:err, message:'Username or Password is Incorrect !!'})
            }
        })
    }catch(exception){
        consolelog('error:'+ exception);
    }
   
}