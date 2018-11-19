var profileUpload = require('../models/profilePicture')
var users = require('../models/user');
var cloud = require('../functions/croudinary');

exports.uploadProfilePicture = function(req,res){
    try{
    
    users.find( {email:req.body.email}, function(err,user){
        if(user.length >=1){
            userx = user[0]._id
            console.log(userx);
            var profile = {
                userID:userx,
                image: req.files[0].path,
                imageID: ''
            }
            cloud.upload(profile.image).then((result) =>{
                console.log(result);
                profile.image = result.url;
                profile.imageID = result.Id;
             console.log("image upload worked"); 
                 profileUpload.create(profile, function(err,result){
                     if(err){
                     res.json({err:err, message:'Error Uploading profile Image'})
                 }else{
                    // res.json({message:' image Uploaded successfully !!'})
                    console.log(profile);
                    console.log(result._id);
                    var profileId = result._id;
                    users.findOneAndUpdate({email:req.body.email},{profilePicture:profileId}, function(err, result){
                        if(result){
                            res.json({message:' image Uploaded successfully !!'}) ;
                        }else{
                            res.json({err:err, message:'Error Uploading profile Image and updating it'});
  
                        }
                    })
                 }
                }) 
            
         })
        }else{
            res.json({err:err, message:'Sorry  User Does not Exist'})
        }
    })
}catch(exception){
    console.log('error:'+ exception);
}
}


exports.viewProfilePicture = (req,res)=>{
    try{
        var profileID = req.body.profile
        users.find({_id:profileID}, function(err, result){
            if(result){
                //user profile picture id
               var profilepic =  result[0].profilePicture
               //lets work on the response if the picture is empty
               if(profilepic == ''){
                res.json({message:'no profile picture for this user yet !!'})
               }else{
               //lets get the id of the picture in the picture schema 
                profileUpload.find({_id:profilepic}, function(err, profile){
                    if(profile){
                        var picID = profile[0]._id;
                        if(JSON.stringify(profilepic).includes(JSON.stringify(picID))){
                            res.json({message:profile})
                        }else{
                            res.json({message:null})
                        }
                    }else{
                        res.json({err:err,message:'picture is  not available !!!'})
 
                    }
                } )
            }
               
            }else{
                res.json({err:err,message:'User does not Exists !!'})
  
            }
        })
    }catch(exception){
        console.log('error:'+ exception);
   
    }
}

