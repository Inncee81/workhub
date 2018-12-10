var app = require('./app');
var port = process.env.PORT || 4000;
app.listen(port, (req,res)=>{
    console.log(`server running on port ${port}`);
});

