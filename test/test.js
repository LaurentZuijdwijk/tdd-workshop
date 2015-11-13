'use strict';

var test = require('tape');
var signer = require('../index.js');

test('signing module should hash the url', function (t) {
	var url = "http://example.com/";
	var clientid = "aaa";
	var secretkey = "secretkey";
	t.equal(signer.hashUrl(url, clientid, secretkey), 
		"http://example.com/?hash=bd56a31386ff8af56b0036829f76513b094292e4&clientid=aaa");
	t.end();
});

test('signing module should hash url with query string', function (t) {
	var url = "http://example.com/?a=b&c=d";
	var clientid = "aaa";
	var secretkey = "secretkey";
	t.equal(signer.hashUrl(url, clientid, secretkey), 
		"http://example.com/?a=b&c=d&hash=36d80badaf1efb5fb227ea2da93d72c968b13a96&clientid=aaa");
	t.end();
});

test('signing module should hash url with query string indpendent of the order', function (t) {
	var url = "http://example.com/?c=d&a=b";
	var clientid = "aaa";
	var secretkey = "secretkey";
	t.equal(signer.hashUrl(url, clientid, secretkey), 
		"http://example.com/?a=b&c=d&hash=36d80badaf1efb5fb227ea2da93d72c968b13a96&clientid=aaa");
	t.end();
});


