const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductQnA = new Schema({
    Question: {
        type: String,
        required: true
    },
    Answer: {
        type: String,
        required: true
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }
}, {
    timestamps: true
});

var ProductQnAs = mongoose.model('ProductQnA', ProductQnA);
module.exports = ProductQnAs;