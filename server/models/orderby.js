const jwt = require('jsonwebtoken');
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
    },
    tokens: [
        {
            token: {
                type:String,
                required:true
            }
        }
    ]
});

 //hashing data

//  orderby.pre('save', async function (next) {
//     console.log('HII FROM INSIDE');
//     if (this.isModified('designation')) {
//         this.designation = await bcrypt.hash(this.designation, 12);
//     }
//     next();
//  });


//generating token jwt
orderby.methods.generateAuthToken = async function () {
    try {
        let tokenNext = jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: tokenNext });
        await this.save();
        return tokenNext;

    } catch (err) {
        console.log(err);
    }
}


 const Oby = mongoose.model('ordersbies',orderby);

 module.exports = Oby;