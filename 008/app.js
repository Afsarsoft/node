// sending full document page to browser

// /*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // send header content type
  res.setHeader('Content-Type', 'text/html');

  // send an html file
  fs.readFile('./views/index.html', (err, data) => {
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
