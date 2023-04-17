
const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    name: { type: String, maxlength:100,required: true },
    breed: { type: String, required: true },
    color: { type: String, maxlength:100, required: true},
    gender: { type: String, enum: ['Cái', 'Đực'] },
    image:{type: String, maxlength: 200}
    
}, {collection:'pets'});


module.exports = mongoose.model('Pet', petSchema);
