// If the user go to the index and about page, OK
// And if the user go anywhere else go to 404 page
// Also, add status code

// /*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // send header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // res.end();
      // since we are sending just one file, we can have it as below
      res.end(data);
    }
  });

})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000 of localhost')
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// */
