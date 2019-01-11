var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    require: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  status: { type: String, required: true },
  verify: { type: Boolean },
  statusCode: { type: Number },
  password: { type: String, required: true },
  profilePicture:String,
  pictureID:String
  

  
});

module.exports = mongoose.model("user", userSchema);

