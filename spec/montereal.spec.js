describe("Montereal", function() {
	it("Has a server", function(){
		startServer();	
	});
	
	it("has a `createDocument` function", function() {
		createDocument('foo')
	});
});