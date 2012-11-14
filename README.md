NOTE: This project has been rewritten and moved [here](https://github.com/bagelstability/Montereal)


Montereal -- your CouchDB managment server!
==========================================


Configuration
-------------

Go to `montereal.js` and edit the `host` object to hold your database and then edit the name of the object sent in the request as ther field. It should look something like this:

```javascript
	/*
	Just edit the host object to hold the host for you Couch 	and change the oblect assignment in the request to hold the field(s) you want.
	*/


	// Require NPM package (for HTTP)
	var http = require('http');

	// Create the function to be called
	function createDocument(content) {
		http.put({ host: "cookiebatch.iriscouch.com/foo" }, function(res) {
			obj = Object.extend({"bar": "#{content}"})
		});
	}

	// Require Net NPM package (for TCP)
	var net = require('net');


	// Create the TCP server
	var server = net.createServer(function (socket) {
 		socket.write("Welcome to Montereal, 8000");
 		createDocument(socket);
	});

	// Run the TCP server on port 8000
	server.listen(8000);
```

Running
-------

just run `mont`!
