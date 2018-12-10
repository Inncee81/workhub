var model = require('../models/state');
exports.createStateCategory = (req,res)=>{
    try{
      var Detail =  {
        state: req.body.state
      }
      model.find({state:Detail.state}, function(err,output){
          if(err){
              res.json({err:err, message:'error found while fetching state !!'})
          }else if(output.length >= 1){
              res.json({message:'Sorry this particular state already exists !!'})
          }else{
              model.create(Detail, function(err, created){
                  if(err){
                      res.json({err:err, message:'Error occured while creating the state category'})
                  }else{
                      res.json({message:'State created Successfully !!'})
                  }
              })
          }
     
      })
  
    }catch(exception){
   console.log("error:" + exception);
    }
  }

  exports.viewAllStates = (req,res)=>{
      try{
        model.find({},function(err,ouput){
            if(err){
                res.json({err:err, message:'Error occured while Fetching all states'})
            }else if(ouput.length == 0){
                res.json({message:'Sorry no State available At this moment !!!'})
            }else{
                res.json({message:ouput});
            }
        })
      }catch(exception){
        console.log("error:" + exception);   
      }
  }
  