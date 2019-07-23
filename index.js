'use strict';

require('dotenv').config();
const mongoose = require('mongoose');


const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect('mongodb://localhost:27017/lab08', mongooseOptions);

require('./src/server.js').start(process.env.PORT || 3000);
