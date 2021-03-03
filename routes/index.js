const Router = require('express');

const route = Router();

route.get('/', (req, res) => {
    return res.send('Main page');
})

module.exports = route;