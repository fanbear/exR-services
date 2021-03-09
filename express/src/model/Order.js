const {Schema, model}  = require('mongoose');

const Order = new Schema(
    {
        title: {type: String, default: 'Обратный звонок'},
        number: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = model('Order', Order);

