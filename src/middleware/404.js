'use strict';

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.send(error);
  res.end();
};