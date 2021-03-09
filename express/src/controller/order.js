'use strict';

const Order = require('../model/Order');

module.exports.create = async function(req, res) {
    try{
        const orderCreate = new Order(
            {
                number: req.body.number
            }
        );

        await orderCreate.save();
        
        res.status(200).json({massage: 'Заказ оформлен'});

    } catch(err) {
        console.log(err);
    }
} 