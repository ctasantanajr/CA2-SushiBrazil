var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: Number,
    section: Number,
    vegetarian: Boolean
});

module.exports = mongoose.model('Item', itemSchema);