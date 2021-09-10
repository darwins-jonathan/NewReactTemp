const express = require('express');

const nft = require('./nft');

const router = express.Router();

router.use('/api/nft', nft)

router.get('/', (req,res) => {
    res.send('hello')
})

module.exports = router;