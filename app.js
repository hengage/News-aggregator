const express = require('express'),
    app = express()
    router = express.Router()
    axios = require('axios'),
    fs = require('fs')

require('dotenv').config();

app.get('/', async (req, res, next) => {
    res.send('<h1>Hello World!</h1>')
})

app.set('port', process.env.PORT)
app.listen(app.get('port'), () => {
    console.log(`Server is ruuning at port  ${app.get('port')}`);
})