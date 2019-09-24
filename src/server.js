'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Custom Middleware
const errorHandler = require('./middleware/error');
const notFoundHandler = require('./middleware/404.js');

// Custom Routes
const apiRouter = require('./routes/v1.js');
const todoRouter = require('./routes/todo.routes.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('./public'));

//  Routes
app.use(apiRouter);

//error handlers
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

