const mongoose = require('mongoose');
require('../models/name.js');
const Name = mongoose.model('Name');

module.exports = {
    index: function(req, res){
        Name.find({}, function(err, names){
            if(err){
                console.log('Error getting all names', err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: names});
            }
        });
    },
    new: function(req, res){
        var name = new Name({name: req.params.name});
        name.save(function(err) {
            if(err){
                console.log('Error adding name', err);
                res.json({message: "Error adding name", error: err});
            } else {
                res.json({message: "Success", data: name});
            }
        });
    },
    delete: function(req, res){
        Name.remove({name: req.params.name}, function(err){
            if (err) {
                console.log('Error deleting name', err);
                res.json({message: "Error deleting name", error: err})
            } else {
                res.json({message: "Success"})
            }
        });
    },
    info: function(req, res){
        Name.findOne({name: req.params.name}, function(err, name){
            if(err){
                console.log('Error getting single name', err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: name});
            }
        });
    },
}