"use strict";

const Table = require('../model/Table');

module.exports.get = async function(req, res) {
    try {
        const getTable = await Table.find();

        res.send(getTable);

    } catch(err) {
        console.log(err);
    }
};

module.exports.create = async function(req, res) {
    try {
        const createTable = new Table({
            name: req.body.name,
            table: req.body.table
        })

        await createTable.save().then(console.log('new Table save'));

        res.sendStatus(200).json({massage: "обьект сохранен"});

    } catch(err) {
        console.log('Table controller:', err);
    }
};

module.exports.delete = async function(req, res) {
    try {
        await Table.remove({ 
            _id: req.params.id 
        })

        res.send('delete');

    } catch(err) {
        console.log(err);
    }
};

module.exports.update = async function(req, res) {
    try {
        await Table.findByIdAndUpdate(req.params.id, {$set: req.body});

        res.send('update');
        
    } catch(err) {
        console.log(err);
    }
};