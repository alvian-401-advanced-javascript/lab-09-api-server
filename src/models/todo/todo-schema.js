'use strict';

const mongoose = require('mongoose');

/**
 * defines key/value pairs for products schema
 */
const todo = mongoose.Schema({
  text: { type: String, required: true },
  category:{type: String},
  assignee: {type: String, required: false},
  difficulty: {type: Number, required: false, default: 3},
  complete: {type: Boolean, required: false, default:false}
});

// Do we need to run any lifecycle hooks/middleware?

module.exports = mongoose.model('todo', todo);
