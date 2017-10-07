var http = require('http');
var PORT1 =7000;
var PORT2 =7500;



//var server = http.createServer(null);

function handleRequest1(request , response) {
	response.end("Good job " +request.url);
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1 , function(){
	console.log("server listening on http://localhost:" +PORT1);
 });
var server2 = http.createServer(handleRequest2);
function handleRequest2(request , response) {
	response.end("Bad job " +request.url);
}
server2.listen(PORT2 , function(){
	console.log("server listening on http://localhost:" +PORT2);
 })