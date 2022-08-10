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
    console.log(request.body.fullname);
    console.log(request.body.designation);
    
    // response.json({Message:request.body})
    // response.send('falana dimkana');
});


module.exports = router