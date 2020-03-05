const express = require('express');
const router= express.Router();
const path = require('path');
const rootDir = require('../util/path');
router.get('/',(req,res,next)=>{
    console.log(" hellow from root");// gets the parsed body from other page
    res.sendFile(path.join(rootDir,'view','shop.html'));
           
});

module.exports= router;