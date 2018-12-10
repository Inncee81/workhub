require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var Mongoose = require('mongoose');
 var app = express();

 module.exports  = app;

 app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type, Accept, Authorization");


if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT,DELETE,PATCH,POST,GET');
    return res.status(200).json({});;
}
next();
});

//var indexRouter = require('./routes/index');
var usersRouter =  require('./routes/users');
var ProfilepictureRouter = require('./routes/profilePictures');
var cvRouter = require('./routes/cvs');
var jobRouter = require('./routes/jobs');
var adminRouter = require('./routes/admins');
var subscribeRouter = require('./routes/subscribes');
var stateRouter = require('./routes/states');

app.use(logger('dev'));
app.use('/files', express.static('files'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

Mongoose.Promise = global.Promise;
  
Mongoose.connect('mongodb://buka4chocksy:peterchukwu1992@ds019836.mlab.com:19836/workhub',{useNewUrlParser:true});
//Mongoose.connect('mongodb://localhost:27017/workhub', { useNewUrlParser: true });

app.get('/', function(req, res){
    res.json({message:"hello world"});
});

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profilePictures', ProfilepictureRouter);
app.use('/cvs',cvRouter);
app.use('/jobs',jobRouter);
app.use('/admin',adminRouter);
app.use('/subscribe',subscribeRouter);
app.use('/state',stateRouter);


app.use((req, res, next)=>{
    const error = new Error('Not Found');
     error.status = 404;
     next(error);
 })
 
 app.use((error, req,res,next)=>{
     res.status(error.status || 500);
     res.json({
         error:{
             message: error.message
         }
     })
 });

 exports.module =  app ;