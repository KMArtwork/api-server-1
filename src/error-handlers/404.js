
'use strict';

// if you include `error` as the first parameter of the function then express will know to treat this as an error-handler function
// e.g. function error404 (error, require, response, next) {//code goes here}
function error404(require, response, next) {
    response.status(404).send('Error 404');
    next();
};

module.exports = error404;