"use strict";

const Router = require('express');
const ProductController = require('../controller/product');
const CategoryController = require('../controller/category');
const TableController = require('../controller/table');
const OrderController = require('../controller/order');

const route = Router();

route.get('/', (req, res) => {
    return res.send('Main page');
})

//Product
route.get('api/product', ProductController.get);
route.post('/api/product/create', ProductController.create);
route.delete('api/product/:id', ProductController.delete);
route.put('api/product/:id', ProductController.update);

//Category
route.get('/api/category', CategoryController.get);
route.post('/api/category/create', CategoryController.create);
route.delete('api/category/:id', CategoryController.delete);
route.put('api/category/:id', CategoryController.update);

//Table
route.get('/api/table', TableController.get);
route.post('/api/table/create', TableController.create);
route.delete('api/table/:id', TableController.delete);
route.put('api/table/:id', TableController.update);

//order
// route.get('/api/order', TableController.get);
route.post('/api/order/form', OrderController.create);
// route.delete('api/order/:id', TableController.delete);

module.exports = route;