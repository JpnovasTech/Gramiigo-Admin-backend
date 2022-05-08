const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductRatingSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
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

var ProductRating = mongoose.model('ProductRating', ProductRatingSchema);
module.exports = ProductRating;