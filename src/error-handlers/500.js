'use strict';

// if you include `error` as the first parameter of the function then express will know to treat this as an error-handler function
// e.g. function error500 (error, require, response, next) {//code goes here}
function error500(require, response, next) {
  response.status(500).send('Error 500');
  next();
};

module.exports = error500;