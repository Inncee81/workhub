var model = require('../models/cv');
var user = require('../models/user')


    exports.createCv = (req,res)=>{
        try{
        var mail = {email:req.body.email}
        user.find(mail, function(err, emails){
            if(emails.length >=1){
                var details = {
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    surname:req.body.surname,
                    email:req.body.email,
                    age:req.body.age,
                    school:req.body.school,
                    schoolingPeriod:req.body.schoolingPeriod,
                    academicQualification:req.body.academicQualification,
                    yearOfExperience:req.body.yearOfExperience,
                    careerObjective:req.body.careerObjective

                }
                model.find({ $and:[{surname: details.surname}, {email: details.email}] },function(err, result){
                    if(result.length >=1 ){
                        res.json({err:err, message:'user already exists !!'});
                    }else{
                        model.create(details, function(err, created){
                            if(created){
                                res.json({message:'user Profile created successfully !!'});
                            }else{
                                res.json({err:err, message:'Error creating user profile '});
                            }
                        })
                    }
                })
            }else{
                res.json({err:err, message:'please insert the email you used during your registration '})
            }
        })
    }catch(exception){
        console.log('error:'+ exception);
    }
    }



exports.searchCv = (req,res)=>{
    try{
    var course = req.body.course
    model.find({"academicQualification":{$regex: course, $options: 'i'}},function(err, output){
        if(err){
            res.json({err:err, message:'error getting course !!'})
        }else if(output.length == 0){
            // res.json({message:'course not found in database !!'})
            model.find({"yearOfExperience":{$regex: course, $options: 'i'}},function(err, output1){
                if(err) return res.json({err: err, message: 'There is no result for your search'})
                res.json({message: output1})
            })
        }else if (output){
            res.json({message:output});
        } else {
            res.json({message: 'There is no result for your search'})
        }
    })
}catch(exception){
    console.log('error:'+ exception);
}
}

