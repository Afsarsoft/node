/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Hello World sample
const express = require('express');

// express app
const app = express();

// Create endpoint/route handlers
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listen for request
// http://localhost:5000/
app.listen(5000);

// execute by nodemon app
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Better approach
const express = require('express');
const app = express();

// Checking the environment variable first if not (or) port 5000
const PORT = process.env.PORT || 5000;

// Create endpoint/route handlers
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// http://localhost:5000/ and have it in console
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Loading HTML file, basic approach
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is not ideal, because we have to put the routes manually
// for every single page have separate routes
// What we want a static folder for all
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Set a static folder
// Get ride of the .HTML from address
// https://stackoverflow.com/questions/16534545/how-to-get-rid-of-html-extension-when-serving-webpages-with-node-js
app.use(express.static(path.join(__dirname, 'public'), { 'extensions': ['html'] }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
*/


/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating the route
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// hard coding JSON
const members = [
  {
    id: 1,
    name: 'Sam Smith',
    email: '1121@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Mary Brown',
    email: '1121@gmail.com',
    status: 'active'
  },
  {
    id: 3,
    name: 'Steve White',
    email: '1121@gmail.com',
    status: 'active'
  }
];

// we mainly use express for JSON APIs to connect from front-end like Vue
// or you want to render templates so you can render dynamic data
// creating a simple REST API
// we are not going to deal with database
// just hard coding array of objects/members
// We want to return it as JSON
// We can hit with Vue, we use Postman for now
// Gets all the members
app.get('/api/members', (req, res) => res.json(members));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Now, go to postman and use GET http://localhost:5000/api/members
// you see the result
*/


/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating the route
const express = require('express');
const path = require('path');
// adding moment for formatting dates
const moment = require('moment');
// moved the hard coded JSON to a different file
const members = require('./Members');


const app = express();
const PORT = process.env.PORT || 5000;

// middleware, logging something
const logger = (req, res, next) => {
  // console.log('Hello!')
  // log some useful info
  // using moment for formatting dates
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
  // http://localhost:5000/api/members: 2020-07-12T15:01:02-07:00
  next();
}

// Init middleware
app.use(logger);

// Gets all the members
// Use Postman
app.get('/api/members', (req, res) => res.json(members));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Now, go to postman and use GET http://localhost:5000/api/members
// you see the result and log in console
*/


/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating the route
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();
const PORT = process.env.PORT || 5000;

// Init middleware
// app.use(logger);

// get all members
app.get('/api/members', (req, res) => res.json(members));

// get single member
app.get('/api/members:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }

});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Go to postman and use GET http://localhost:5000/api/members2
// you see the result for member 2
// Go to postman and use GET http://localhost:5000/api/members6
// you see the error message
*/


// /*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// We can use router comes with express to put all our similar routes
// to a separate file
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 5000;

// Init middleware
// app.use(logger);

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Go to postman and use GET http://localhost:5000/api/members2
// you see the result for member 2
// Go to postman and use GET http://localhost:5000/api/members6
// you see the error message
// */
