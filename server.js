/**
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controller = require('./controllers/controller')
app.set('view engine','ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('./public'));

controller(app);

app.listen(3000);
**/


const mongoose = require("mongoose");
const express = require("express");

const dotenv = require("dotenv");
const DBConnection = require("./DBConnection/DBConnection");
const controller = require("./controllers/controller");
var bodyParser = require('body-parser');

dotenv.config();

const app = express();
DBConnection();
const port = 8000;
app.set('view engine','ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('./public'));

controller(app);

app.listen(port,()=>{
    console.log(`Server is running at port:${port}`);
});