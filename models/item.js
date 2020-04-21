var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: Number,
    section: { 
        type: String,
        enum: ['STARTER', 'SUSHI', 'COMBO', 'SOFT_DRINK', 'ALCOHOLIC_BEVERAGE']
    },
    vegetarian: Boolean
});

module.exports = mongoose.model('Item', itemSchema);