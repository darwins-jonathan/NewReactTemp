const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./environment');
require('./database')

const routes = require('./routes');

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware)
// app.use(cors({
//     credentials: false,
//     origin,
// }))

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`express server listening on port ${process.env.PORT}`)
}) 