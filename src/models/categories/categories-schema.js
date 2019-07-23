'use strict';

const mongoose = require('mongoose');

/**
 * defines key/value pairs for products schema
 */
const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Do we need to run any lifecycle hooks/middleware?

module.exports = mongoose.model('categories', categories);
