const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    firstname : { type : String},
    secondname : { type : String}
})

module.exports = mongoose.model('User',Userschema)