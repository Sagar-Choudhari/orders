const mongoose = require('mongoose')

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
})

 const Oby = mongoose.model('ordersBy','orderby');

 module.exports = Oby;