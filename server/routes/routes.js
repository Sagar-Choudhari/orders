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

// using promises
// router.post('/orderby', (request, response) => {

//     const { fullname, designation, status } = request.body;
//     // console.log(fullname);
//     // console.log(status);

//     if (!fullname || !designation || !status) {
//         return response.status(422).json({ error : "pls enter data in fields" });
//     }

//     Oby.findOne({ fullname:fullname })
//     .then((userExist) => {
//         if (userExist) {
//             return response.status(422).json({ error:"name already exist" });
//         }

//         const oby = new Oby({ fullname, designation, status });

//         oby.save().then(() => {
//             response.status(201).json({ message:"Data Added Successfully" });
//         }).catch((err) => response.status(500).json({ error:"failed to add data" }));

//     }).catch(err => { console.log(err); });

    
//     // response.json({Message:request.body})
//     // response.send('falana dimkana');
// });

// .then((userExist) => {
        //     if (userExist) {
        //         return response.status(422).json({ error:"name already exist" });
        //     }
    
        //     const oby = new Oby({ fullname, designation, status });
    
        //     oby.save().then(() => {
        //         response.status(201).json({ message:"Data Added Successfully" });
        //     }).catch((err) => response.status(500).json({ error:"failed to add data" }));
    
        // });


//async await
router.post('/orderby',async (request, response) => {

    const { fullname, designation, status } = request.body;
    // console.log(fullname);
    // console.log(status);

    if (!fullname || !designation || !status) {
        return response.status(422).json({ error : "pls enter data in fields" });
    }

    try {
        const userExist = await Oby.findOne({ fullname:fullname });

        if (userExist) {
            return response.status(422).json({ error:"name already exist" });
        } 
        // else if (pass != cpass){
        //     return response.status(422).json({ error:"confirm password does not match" });
        // }
        else {
            const oby = new Oby({ fullname, designation, status });

            const saveData = await oby.save();
    
            // console.log('${oby} registrated success');
            // console.log(saveData);
    
            if (saveData) {
                response.status(201).json({ message:"Data Added Successfully" });
            }
        }
        
    } catch (err) {
        console.log(err);
    }
    
    // response.json({Message:request.body})
    // response.send('falana dimkana');
});

router.post('/login', async (request, response) => {
    // console.log(request.body);
    // response.json({ message:'success' });
    try{
        const {fullname, developer} = request.body;

        if(!fullname){
            return response.status(400).json({error:"plz filled the data"});
        }

        const login = await Oby.findOne({ fullname: fullname });

        // console.log(login);

        if (!login){
            response.status(400).json({ error: "login error" });
        } else {
            response.json({ message: "login success" });
        }

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;