const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(express.json());

// const Oby = require('./models/orderby');

app.use(require('./routes/routes'));

const PORT = process.env.PORT;

//middleware

const middleware = (request, response, next) => {
    console.log('middleware');
    next();
}

// middleware();


app.get('/dev', middleware, (request, response) => {
    response.send('DEV Page')
});


app.listen(PORT, () => {
    console.log('server is up and running at port ${PORT}');
})



// mongodb+srv://sagarpc:NsPRod77@orders.zldtr8w.mongodb.net/test