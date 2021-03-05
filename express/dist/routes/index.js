'use strict';

var Router = require('express');

var route = Router();

route.get('/', function (req, res) {
    return res.send('Main page');
});

module.exports = route;