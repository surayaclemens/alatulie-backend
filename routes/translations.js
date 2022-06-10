const express = require('express');
const router = express.Router();
const app = express();
const fs = require('fs');
const sindarinTrans = fs.readFileSync('./data/sindarin.json');
const quenyanTrans = fs.readFileSync('./data/quenya.json');


router.route('/sindarin')
    .get((req,res) => {
        const words = JSON.parse(sindarinTrans);
        const foundWord = words.filter(word => {
            req.body === word.english  
        })
        console.log(req)
    })

router.route('quenya')
    .get((req,res) => {
        const foundWord = quenyaTrans.find(word => {
            req.params === word.english
        })
    })

router.route('orcish')
    .get((req,res) => {
            
    })

module.exports = router; 