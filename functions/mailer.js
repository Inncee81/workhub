var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
        
    service: 'gmail',
    auth: {
        user: 'comicgallery2018@gmail.com',
        pass: 'GROUP14SCRUM'           }
   });

   exports.UserAdded = function(email,code,callback){
        var mailOptions = {
            from: '"WorkHub"',
            to: email,
            subject: 'Welcome   to WorkHub',
            html: `<center><h4></string>Hello ${email} thanks for registering with Workhub please verify your Account by inserting this code <strong>${code}</strong> in the verification page</h4>
            <div style="text-align:center; width: 50%; font-family:tahoma; columns: #909090;">
            <div style="background: wheat; padding:8%">
           </div>
            </center>`
        };
        transporter.sendMail(mailOptions, callback); 
   }

//    const mailOptions = {
//     from: 'comicgallery2018@gmail.com', // sender address
//     to: req.body.email, // list of receivers
//     subject: 'Chota  Subscription Alert', // Subject line
//     html: '<p>Your Subscription to chota was Successful and the Account varification  code is </p>'+details.statusCode,// plain text body
    
//   };