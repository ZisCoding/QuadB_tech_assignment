// importing mongoose module
const mongoose = require('mongoose');

// creating schema according to the data which we have to store in db
const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    sell: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const CryptoModel = mongoose.model('CryptoModel',cryptoSchema);

module.exports = CryptoModel;
