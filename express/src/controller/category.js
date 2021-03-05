"use strict";

const Category = require('../model/Category');

module.exports.get = async function(req, res) {
    try {
        const getCategory = await Category.find();

        res.send(getCategory);

    } catch(err) {
        console.log(err);
    }
};

module.exports.create = async function(req, res) {
    try {
        const createCategory = new Category({
            title: req.body.title,
            metaTitle: req.body.meta_title,
            description: req.body.description,
            metaDescription: req.body.meta_description,
            url: req.body.url,
            isPublished: req.body.published, 
            mainCategory: req.body.main_category
        })

        await createCategory.save().then(console.log('new Category save'));

        res.sendStatus(200);

    } catch(err) {
        console.log('Category controller:', err);
    }
};

module.exports.delete = async function(req, res) {
    try {
        await Category.remove({ 
            _id: req.params.id 
        })

        res.send('delete');

    } catch(err) {
        console.log(err);
    }
};

module.exports.update = async function(req, res) {
    try {
        await Category.findByIdAndUpdate(req.params.id, {$set: req.body});

        res.send('update');
        
    } catch(err) {
        console.log(err);
    }
};