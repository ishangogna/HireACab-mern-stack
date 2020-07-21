const express = require('express');
const Driver = require('../models/driver');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/drivers', (req,res,next)=>{
    Driver.find({})
    .then(drivers => res.send(drivers));
})

router.post('/drivers', (req,res,next)=>{
    Driver.create(req.body)
    .then(driver => res.send(driver))
    .catch(next)
});

router.put('/driver/:id', (req,res,next)=>{
    Driver.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Driver.findOne({_id:req.params.id})
        .then(driver => res.send(driver));
    })
})

router.delete('/driver/:id', (req,res,next)=>{
    Driver.findByIdAndRemove({_id:req.params.id})
    .then(driver => res.send(driver));
})


module.exports = router;
