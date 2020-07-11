// passing request and response

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Giving browser some information about type of response
  // set header content type and telling browser we are sending back text info
  res.setHeader('Content-Type', 'text/plain');

  res.write('hello, guys!');
  res.end();
  // we should see in http://localhost:3000/ "hello guys!"
})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000 of localhost')
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Now sending HTML
/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');

  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<p>hello, guys!</p>');
  res.write('<p>hello, again guys!</p>');
  res.end();
})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000 of localhost')
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
