const express = require('express');
const { Nft } = require('../database/schemas')

const router = express.Router();

module.exports = router;

router.get('/testing', (req, res) => {
    res.send('testing nft routes')
})

router.post('/IPFSCreation721', (req, res) => {
    console.log('req body', req.body)
  
    const newNft = new Nft(req.body)
    newNft.save((err, savedNft) => {
        if(err) {
            res.status(400).send({message: 'failed', err})
        } else {
            res.send({message: 'successful', data: savedNft})
        } 
    })
})