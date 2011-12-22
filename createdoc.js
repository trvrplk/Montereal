/*
This is just creating a document in Couch. Nothing much to see here. Just edit the host object to hold the host for you Couch and change the oblect assignment in the request to hold the field(s) you want.
*/

var http = require('http');

function createDocument(content) {
	http.put({ host: "" }, function(res) {
		{
			"": "#{content}"
		}
	});
}