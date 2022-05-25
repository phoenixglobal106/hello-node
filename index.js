//import node framework

var express = require('express');
const res = require('express/lib/response');

var app = express();

app.get('/',function(req,res){
    res.send('Hello world !! Welcome to Cloud Machine');
});

app.listen(process.env.PORT || 3000);

module.exports = app;