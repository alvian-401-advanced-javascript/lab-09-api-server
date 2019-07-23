'use strict';


const mongoose = require('mongoose');
/**
 * defines key/value pairs for products schema
 */
const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type:String, required: false },
  inStock: {type: Boolean, required: false},
  
});


module.exports = mongoose.model('products', products);
