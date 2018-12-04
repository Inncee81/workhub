var model = require('../models/user');
var cv = require('../models/cv');
var job = require('../models/job');
var subscribers = require('../models/subscribe');
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
                        password:hash,
                        profilePicture:''
                        
                        
                    }
                    var subject = 'Hello ' + details.firstname + ',';
                    var mailBody = `We're really excited for you to join our online Job community. 
                    You account creation was successfully made`

                    model.create(details, (err,details)=>{
                        if(details){
                            mailer.UserAdded(details.email,details.statusCode, function (err, info) {
                                if(info){
                                    res.json({message:'Email Registeration Successfully !!'});

                                }else{
                                    //res.json({err:err,message:'Error Sending Email to user' })
                                    console.log(err)
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
        console.log('error:'+ exception);
    }
   
}

exports.userApplyJob = (req,res)=>{
    try{
        var userID = req.params.id
        var jobIDx = req.body.id
        model.findById({_id:userID}, function(err, ID){
            if(err){
                res.json({err:err, message:'Error getting user!!!'});
            }else if(ID){
                var user = ID._id;
                var userName = ID.firstname
                var userSurname = ID.lastname
                var userEmail = ID.email
                cv.find({userID:user},function(err, userCV){
                    if(err){
                        res.json({err:err, message:'Error fetching user cv!!!'});

                    }else if(userCV.length >=1){
                        var useryrExp = userCV[0].yearOfExperience
                        var cvCourse = userCV[0].academicQualification
                        job.find({_id:jobIDx},function(err, found){
                            if(err){
                                res.json({err:err, message:'Error getting job!!!'});  
                            }else if(found.length >=1){
                                 var jobyrExp = found[0].yearOfExperience
                                 var jobCourse = found[0].academicQualification  
                                 var jobTitle = found[0].jobTitle
                                 var companyName = found[0].companyName 
                                if(jobyrExp == useryrExp){
                                    if(cvCourse == jobCourse){
                                        var userJobApplication = {
                                            userID:userID,
                                            JObID:jobIDx,
                                            jobTitle:jobTitle,
                                            JObCourse:jobCourse,
                                            companyName:companyName,
                                            jobyrExp:jobyrExp,
                                            Surname:userName,
                                            othernames:userSurname,
                                            useremail:userEmail,
                                            usercourse:cvCourse,
                                            userExp:useryrExp

                                        }
                                        subscribers.find({$and:[{userID:userID},{JObID:jobIDx}]},function(err,result){
                                            if(result.length >=1){
                                              res.json({message:'Sorry you already applied for this particular job !!!'})
                                            }else{
                                                subscribers.create(userJobApplication,function(err, added){
                                                    if(added){
                                                        res.json({message:'your application was successfull'});
                                                    }else{
                                                        res.json({err:err, message:'error occured while applying for this job !!'})
                                                    }
                                                })
                                            }
                                        })
                                    }else{
                                        res.json({message:'Sorry your qualifications do not match this job specifications!!'});
                                    }
                                    }else{
                                        res.json({message:'Sorry your qualifications do not match this job specifications!!'});

                                    }
                                
                            }else{
                                res.json({message:'Sorry Job not available!!'});
                            }
                        })
                    }else{
                        res.json({ message:'Cv not available!!!'});

                    }
                })
            }else{
                res.json({ message:'User not available!!!'});
            }
        })
    }catch(exception){
        console.log('error:'+ exception);
  
    }
}

exports.UserViewJobByQualification = (req,res)=>{
    try{
        var userID = req.params.id
        cv.find({userID:userID},function(err,user){
            if(err){
                res.json({err:err, message:'Error occured While Fetching user !!!'})
            }else if(user){
                const userCourse = user[0].academicQualification
                const useryrExp = user[0].yearOfExperience
                job.find({$and:[{academicQualification:userCourse},{yearOfExperience:useryrExp}]},function(err, output){
                   if(output){
                        res.json({output})
                    } else if(output.length === 0){
                        res.json({message:'No related Job Available for now !!!'})                   
                    }else{
                        res.json({err:err,message:'Error Occured While fetching related job !!!'})
                    }
                })
            }else{
                res.json({message:'No user found !!!'})
            }
        })
}catch(exception){
    console.log('error:'+ exception);
}
}

