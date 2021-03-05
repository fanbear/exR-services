"use strict";

const {Schema, model}  = require('mongoose');

const table = new Schema(
    {
        name: { type: String },
        tabel: { type: Array }
    }
);

module.exports = model('Table', table);