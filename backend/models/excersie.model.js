const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const excersieSchema = new Schema({
    username : {type : String , required : true},
    description : {type : String , required : true},
    duration : {type : Number , required : true},
    date : {type : Date , reqiured : true},
}, { 
    timestamps : true,
});

const Excersie  = mongoose.model('Excersie' , excersieSchema);

module.exports = Excersie;