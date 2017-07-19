// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTONE = 7000;
var PORTTWO = 7500
// Here we create a generic function to handle requests and responses
function handleRequestONE(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("something bad about yourself " + request.url);
}
function handleRequestTWO(request, response) {

  response.end("something bad about user" + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverONE = http.createServer(handleRequestONE);
var serverTWO = http.createServer(handleRequestTWO);

// Here we start our server so that it can begin listening to client requests.
serverONE.listen(PORTONE, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

  serverTWO.listen(PORTTWO, function() {

 
  console.log("Server listening on: http://localhost:%s", PORTTWO);

});