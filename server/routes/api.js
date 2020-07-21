const express = require('express');

const router = express.Router();


router.get('/drivers', (req,res,next)=>{
    res.send({type:'GET'})
})

router.post('/drivers', (req,res,next)=>{
    res.send({type:'POST'})
})

router.put('/driver/:id', (req,res,next)=>{
    res.send({type:'PUT'})
})

router.delete('/driver/:id', (req,res,next)=>{
    res.send({type:'DELETE'})
})


module.exports = router;
