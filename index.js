'use strict';
var crypto = require('crypto');
var querystring = require('querystring');
var urlParser = require('url').parse;
var _ = require('lodash');
var util = require('util');


//
function signString(str) {
    var shasum = crypto.createHash('sha1');
    shasum.update(str);
    return shasum.digest('hex');
}


module.exports = {

};





// return function (req, res, next) {
// 	if(signed){
// 	    next(true);
// 	}
// 	else {
//     	next(false);
// 	}
// };
