const mongoose = require('mongoose');

const DB = process.env.DATABASE;

// , {
//     useNewUrlParser: true,
//     userCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }
//                      ||paste here after database if connection fail
mongoose.connect(DB).then(() => {
    console.log('Connection successfull');
}).catch((err) => console.log(err));