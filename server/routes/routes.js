const { response } = require('express');
const express = require('express');
const router = express.Router();

require('../db/conn');
const Oby = require('../models/orderby');

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
    // console.log(fullname);
    // console.log(status);

    if (!fullname || !designation || !status) {
        return response.status(422).json({ error : "pls enter data in fields" });
    }

    Oby.findOne({ fullname:fullname })
    .then((userExist) => {
        if (userExist) {
            return response.status(422).json({ error:"name already exist" });
        }

        const oby = new Oby({ fullname, designation, status });

        oby.save().then(() => {
            response.status(201).json({ message:"Data Added Successfully" });
        }).catch((err) => response.status(500).json({ error:"failed to add data" }));

    }).catch(err => { console.log(err); });

    
    // response.json({Message:request.body})
    // response.send('falana dimkana');
});


module.exports = router