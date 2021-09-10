const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./environment');
require('./database')

const routes = require('./routes');

const app = express();

app.use('/', routes)

// app.get('/', (req,res) => {
//     res.send('hello')
// })

app.listen(process.env.PORT, () => {
    console.log(`express server listening on port ${process.env.PORT}`)
}) 