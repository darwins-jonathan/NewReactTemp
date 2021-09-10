const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/testing', (req, res) => {
    res.send('testing nft routes')
})