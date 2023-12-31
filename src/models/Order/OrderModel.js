const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    orderid: {
        type: String,
        required: true,
        unique: true, 
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cartdata: {
        type: JSON,
        required: true,
    },
    totalprice: {
        type: Number,
        required: true,
    },
    paymentmode: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    customtext: {
        type: String,
    },
    customlink: {
        type: String,
    },
    customimg: {
        type: JSON,
    },
    personalization: {
        type: Boolean,
    },
    orderName: {
        type: String,
    },
},
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    })

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
