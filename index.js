'use strict';

require('dotenv').config();
const mongoose = require('mongoose');


const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/server.js').start(process.env.PORT || 3000);
