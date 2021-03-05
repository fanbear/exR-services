"use strict";

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var connect = require('./dataBase/connect');

var app = express();
var port = 3000;

console.log(connect.URI);
// DataBase connect
mongoose.connect(connect.URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
    return console.log("MongoDB connected");
}).catch(function (err) {
    return console.log(err);
});

// Routing
var Routes = require('./routes/index');

// Used module
app.use(Routes);
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    extended: true,
    inflate: true,
    parameterLimit: 1000,
    type: 'application/json',
    verify: undefined
}));

// Server
app.listen(port, function () {
    console.log("Express server start");
});