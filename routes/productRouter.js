const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Products = require('../models/dishes');
const cors = require('./cors');

const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.route('/')
// .get(cors.cors, (req, res, next) => {
//     Dishes.find(req.query)
//     .populate('comments.author')
//     .then((dishes)=>{
//         res.statusCode = 200;
//         res.setHeader('content-type','application/json');
//         res.json(dishes)
//     }, (err) => next(err))
//     .catch((err)=>{
//         next(err)
//     })
// }).
post( (req, res, next) => {
    Products.create(req.body)
    .then((dish)=>{
        console.log("Dish created" + dish);
        res.statusCode = 200;
        res.setHeader('content-type','application/json');
        res.json(dish);
    }, (err) => next(err)).catch((err)=> next(err));
}).
put( (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT is not supported operation here ')
}).
delete( (req, res, next) => {
    Products.remove({}).then((resp)=>{
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json(dish);
    }, (err) => next(err)).catch((err) => next(err));
})

productRouter.route('/:productID')
.get(cors.cors, (req, res, next) => {
    Products.findById(req.params.productID).then((product)=>{
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json(product);
    }, (err) => next(err)).catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST is not supported operation here')
})
.put((req, res, next) => {
    // req.body.price = (req.body.price/100).toFixed(2);
    console.log(req.body);
    Products.findByIdAndUpdate(req.params.productID, {$set : req.body }, {new :true})
    .then((product)=>{
         res.statusCode = 200;
         res.setHeader('content-type', 'application/json');
         res.json(product);
    }, (err)=> next (err)) .catch((err) => next(err));
})
.delete((req, res, next) => {
    Products.findByIdAndRemove(req.params.productID).then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.json(resp);
    }, (err) => next(err)).catch((err) => next(err));
})



module.exports = productRouter;