const express = require('express');
const router= express.Router();
const path = require('path');


router.get('/product-page',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','product-page.html'));
});

router.post('/product-page',(req,res,next)=>{
    console.log(req.body);// gets the parsed body from other page
    res.redirect('/'); // redirecting it to the other page      
});

module.exports= router;