// Using lodash

// /*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const http = require('http');
const fs = require('fs');

// Use lodash as best practice use _
const _ = require('lodash')

const server = http.createServer((req, res) => {

  // lodash examples
  // random numbers
  const rNum = _.random(0, 20);
  console.log(rNum);

  // calling a function only once
  const greet = _.once(() => {
    console.log('hello!');
  });

  // only getting one
  greet();
  greet();


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
    // redirecting the old removed or renamed page
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
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
