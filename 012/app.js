// express makes it simpler. compare with appOld
// new file for our express app sample
const express = require('express');

// express app
const app = express();

// listen for request
app.listen(3000);

// listen to get request for home page
app.get('/', (req, res) => {
  // sending html info
  // res.send('<p>home page</p>');
  // sending HTML file
  res.sendFile('./views/index.html', { root: __dirname });
});

// listen to get request for about page
app.get('/about', (req, res) => {
  // sending html info
  // res.send('<p>about page</p>');
  // sending HTML file
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// need to make sure to put it to last
// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})


