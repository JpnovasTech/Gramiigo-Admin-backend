const express = require("express");
var router = express.Router();

var Products = require("./productRouter");
router.use("/products", Products.router);

module.exports.router = router;