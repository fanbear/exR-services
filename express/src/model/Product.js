"use strict";

const {Schema, model}  = require('mongoose');

const product = new Schema(
    {
        title: { type: String },
        metaTitle: { type: String },
        description: { type: String },
        metaDescription: { type: String },
        url: { type: String },
        isPublished: { type: Boolean },
        category: { type: String } 
    }, 
    {
        timestamps: true
    }
);

module.exports = model('Product', product);