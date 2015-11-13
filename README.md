# tdd-workshop

## installation

clone https://github.com/LaurentZuijdwijk/tdd-workshop

run ```npm i```

run tests ```npm test```

## Instructions

#### Goals:
Write a small NodeJs module to sign and validate requests. It should be able to sign urls and should expose Express middleware to validate incoming requests. 

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

The focus of the exercise should be to iteratively write code and tests. The tests should help think about your code and help refactoring. 

### Technologies

#### Tape for testing
A simple TAP library. The barebones are set-up in /test/test.js. Run with ```npm test```
https://ci.testling.com/guide/tape

#### Node API's that are useful 
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

usefull request object keys:

* req.path
* req.method
* req.query








