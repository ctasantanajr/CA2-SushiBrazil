var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose'),
assert = require('assert'),
path = require('path'), //The path module provides utilities for working with file and directory paths
expAutoSan = require('express-autosanitizer'); //This module does the sanitisation of user input on the client-side
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;
//var itemCtrl = require('./item-controller');

app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served
app.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
app.use(express.json()); //We include support for JSON that is coming from the client
app.use(expAutoSan.allUnsafe); //it sanitises all data coming from user input

app.use(logger('dev'));
app.use(bodyParser.json()); 
app.use(require('./routes'));


app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

app.get('/', function(req, res){

    res.render('index');

});

