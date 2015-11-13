'use strict';
var crypto = require('crypto');
var querystring = require('querystring');
var urlParser = require('url').parse;
var _ = require('lodash');
var util = require('util');


// Example function for signing strings.
function signString(str) {
    var shasum = crypto.createHash('sha1');
    shasum.update(str);
    return shasum.digest('hex');
}

function hashUrl(url, clientid, secretkey) {
	var tokenizedUrl = urlParser(url);
	if(tokenizedUrl.query){
		url = url + "&" 
	}else {
		url = url + "?"
	}
	console.log(signString(url + secretkey));
	return url + 'hash=' + signString(url + secretkey) + '&clientid=' + clientid ;
}

module.exports = {
	hashUrl: hashUrl
};





// return function (req, res, next) {
// 	if(signed){
// 	    next(true);
// 	}
// 	else {
//     	next(false);
// 	}
// };
