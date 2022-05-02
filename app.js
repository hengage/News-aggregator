const { default: axios } = require('axios');

const express = require('express'),
    app = express(),
    router = express.Router(),
    // axios = require('axios'),
    fs = require('fs');

require('dotenv').config();

app.get('/', async (req, res, next) => {
    const url = `https://newsapi.org/v2/top-headlines?country=de&language=de&category=sports&apiKey=${process.env.ACCESS_KEY}`

    try {
        const news = await axios.get(url);
        // res.send(news.data);
        res.json({
            statusCode: 200,
            message: "News recieved succesfully!",
            data: news.data
        })
    } catch(error) {
        if(error.response) {
            res.json({
                status:"error",
                code: "apiKeyInvalid",
                message: error
            })
            console.log(error)
        }
    }
    

})

app.set('port', process.env.PORT)
app.listen(app.get('port'), () => {
    console.log(`Server is ruuning at port  ${app.get('port')}`);
})