const express = require('express');
const router = express.Router();
const fs = require('fs');
const sindarinTrans = fs.readFileSync('./data/sindarin.json');
const quenyaTrans = fs.readFileSync('./data/quenya.json');


router.route('/')
    .get((_req,res) => {
        res.send('hello world')
    })

router.route('/sindarin')
    .get((_req,res) => {
        const sindarinWords = JSON.parse(sindarinTrans);
        res.send(sindarinWords)
    })

router.route('/quenya')
    .get((_req,res) => {
        const quenyaWords = JSON.parse(quenyaTrans);
        res.send(quenyaWords)
    })

router.route('/orcish')
    .get((req,res) => {
            
    })

module.exports = router; 
