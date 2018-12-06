const model = require("../models/job");
const users = require("../models/user");
var googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyBakET74vGE1x9nvPEOdbis23e7-kKGs4Q"
});

exports.createJob = (req, res) => {
  googleMapsClient.geocode(
    {
      address: req.body.jobLocation
    },
    function(err, response) {
      console.log(err);
      if (err) throw new Error(err);
      console.log(response.json.results);
      try {
        var detail = {
          username: req.body.username,
          email: req.body.email,
          companyName: req.body.companyName,
          companyDetails: req.body.companyDetails,
          jobTitle: req.body.jobTitle,
          yearOfExperience: req.body.yearOfExperience,
          jobLocation: response.json.results[0].formatted_address,
          academicQualification: req.body.academicQualification,
          jobDescription: req.body.jobDescription,
          salaryRange: req.body.salaryRange,
          coordinates: response.json.results[0].geometry.location
        };
        console.log(detail);
        users.find({ email: req.body.email }, function(err, user) {
          console.log(user);
          if (user.length >= 1) {
            userStatus = user[0].status;
            console.log(userStatus);
            if (userStatus == "job seeker") {
              res.json({ message: "Sorry You are not authorized to post jobs" });
            } else {
              model.find(
                {
                  $and: [
                    { companyName: detail.companyName },
                    { jobTitle: detail.jobTitle },
                    { jobLocation: detail.jobDescription }
                  ]
                },
                function(err, output) {
                  if (output.length >= 1) {
                    res.json({
                      err: err,
                      message: "error encountered during creation !!"
                    });
                  } else {
                    model.create(detail, function(err, created) {
                      if (created) {
                        res.json({
                          message: "job created successfully !!!",
                          coordinates: detail.coordinates
                        });
                      } else {
                        res.json({ err: err, message: "Job was not created !!!" });
                      }
                    });
                  }
                }
              );
            }
          } else {
            res.json({
              err: err,
              message: "please provide the email you registered with !!!"
            });
          }
        });
      } catch (exception) {
        console.log("error:" + exception);
      }
    }
  );
};

exports.deleteJob = (req, res)=>{
  try{
     var data = req.params.id
      model.findByIdAndDelete({_id:data}, function(err, data){
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

exports.SearchJobs = (req,res)=>{
  try{
    var course = req.body.course
    var  location = req.body.location
    model.find({$and:[{"jobLocation":{$regex: location, $options: 'i'}},{"academicQualification":{$regex: course, $options: 'i'}}]},function(err, output){
      if(output.length>=1){
        res.json({output})
      }else if(output.length == 0){
        res.json({message:'Related Job searched Not found !!!'})
      }else{
        res.json({err:err, message:'Error found while getting job !!!'})
      }
    })
  }catch(exception){
    console.log("error:" + exception);
  }
}
