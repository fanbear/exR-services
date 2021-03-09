"use strict";

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const connect = require('./dataBase/connect');




const app = express();
const port = process.env.PORT || 5000;

// DataBase connect
mongoose.connect(connect.URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>  console.log("MongoDB connected"))
    .catch(err => console.log(err))


// Routing
const Routes = require('./routes/index');

// Used module

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json({
    extended: true,
    inflate: true,
    parameterLimit: 1000,
    type: 'application/json',
    verify: undefined
}));
//api from react
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Used routes
app.use(Routes);


// Server
app.listen(port, () => {
    console.log("Express server start");
})