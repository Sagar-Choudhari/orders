const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Homepage')
});

router.get('/order', (request, response) => {
    response.send('Order page')
});

router.get('/dispatch', (request, response) => {
    response.send('dispatch page')
});

router.get('/settings', (request, response) => {
    response.send('Settings Page')
});


router.post('/orderby',(request, response) => {

    const { fullname, designation, status } = request.body;
    console.log(fullname);
    console.log(status);



    
    // response.json({Message:request.body})
    // response.send('falana dimkana');
});


module.exports = router