"use strict";

const {Schema, model}  = require('mongoose');

const category = new Schema(
    {
        title: { type: String },
        metaTitle: { type: String },
        description: { type: String },
        metaDescription: { type: String },
        url: { type: String },
        isPublished: { type: Boolean },
        mainCategory: { type: String },
    }
);

module.exports = model('Category', category);