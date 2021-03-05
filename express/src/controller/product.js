"use strict";

const Product = require('../model/Product');

module.exports.get = async function(req, res) {
    try {
        const getProduct = await Product.find();

        res.send(getProduct);

    } catch(err) {
        console.log(err);
    }
};

module.exports.create = async function(req, res) {
    try {
        const createProduct = new Product({
            title: req.body.title,
            metaTitle: req.body.meta_title,
            description: req.body.description,
            metaDescription: req.body.meta_description,
            url: req.body.url,
            isPublished: req.body.published, 
            category: req.body.category
        })

        await createProduct.save().then(console.log('new Product save'));

        res.sendStatus(200).json({massage: "обьект сохранен"});

    } catch(err) {
        console.log('Product controller:', err);
    }
};

module.exports.delete = async function(req, res) {
    try {
        await Product.remove({ 
            _id: req.params.id 
        })

        res.send('delete');

    } catch(err) {
        console.log(err);
    }
};

module.exports.update = async function(req, res) {
    try {
        await Product.findByIdAndUpdate(req.params.id, {$set: req.body});

        res.send('update');
        
    } catch(err) {
        console.log(err);
    }
};