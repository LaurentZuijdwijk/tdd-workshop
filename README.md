# tdd-workshop

## installation

clone https://github.com/LaurentZuijdwijk/tdd-workshop

run ```npm i```

run tests ```npm test```

## Instructions

Write a small NodeJs module to sign url's and contain Express middleware to validate signed requests. This way the client and server can use the same module.

#### example:

Before: ```http://example.com/index.html?key=value```

After: ```http://example.com/index.html?key=value&client_id=1234&token=HASHVALUE```

Signing of the request must consist of the following elements:

* path
* querystring
* request method
* a key ID
* a shared secret key 

What the api will look like and how the signing is done exactly is up to you, as long as it is easily testable.

### Technologies

#### Tape for testing
A simple TAP library. The barebones are set-up in /test/test.js. Run with ```npm test```
https://ci.testling.com/guide/tape

#### Node API that are useful 
##### querystring
https://nodejs.org/api/querystring.html
```javascript
querystring.parse('foo=bar&baz=qux&baz=quux&corge')
// returns
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
// returns
'foo=bar&baz=qux&baz=quux&corge='
```

##### URL parse

url.parse(urlStr);
Useful result object keys:
* href
* protocol
* host
* hostname
* port
* pathname
* query

#### Express middleware
We are building a piece of express middleware.  
http://expressjs.com/api.html#app.use


That looks like the example below generally:

```javascript

app.use(function(req,res,next){
	// do something
	if(true){
		next();
	}
	else{
		next(new Error('something went wrong'));
	}
});

```









