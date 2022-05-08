const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyAdmin =  (req,res,next)=>{
    if(!req.payload)
        return res.status(401).json({message : 'Unauthorised'}); 
    if(req.payload.role != 'Admin')
        return res.status(401).json({message : 'Not an Admin'});
    if(req.payload.role == 'Admin')
        next();
}

module.exports.verifyAdmin = verifyAdmin;