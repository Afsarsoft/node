// Creating a local server on our computer
// using node which can be used to actively
// listen for requests and respond to them
const http = require('http');

// passing request and response
const server = http.createServer((req, res) => {
  // this call back function will run every time a request
  // comes in to our server.
  console.log('request made');
})


// localhost is like a domain name on the web and pointing to our own computer
// Port number is like a door into a computer
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000 of localhost')
})

// if we go to our browser http://localhost:3000/
// will see the "request made" on the console
// Note: running on the server and not visible on browser console





