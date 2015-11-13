# tdd-workshop

## installation

clone https://github.com/LaurentZuijdwijk/tdd-workshop

run ```npm i```

run tests ```npm test```

## instructions

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

