const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const orderby = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
});

 //hashing data

//  orderby.pre('save', async function (next) {
//     console.log('HII FROM INSIDE');
//     if (this.isModified('designation')) {
//         this.designation = await bcrypt.hash(this.designation, 12);
//     }
//     next();
//  });


 const Oby = mongoose.model('ordersbies',orderby);

 module.exports = Oby;