const mongoose = require('mongoose');
require('../config/mongoose.js');

var NameSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
}, {timestamps: true});

module.exports = { 
    Name: mongoose.model('Name', NameSchema)
}