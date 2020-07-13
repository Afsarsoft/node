// Learning Express

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
// nodemon app
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Better approach
const express = require('express');
const app = express();

// Create endpoint/route handlers
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// Checking the environment variable first if not (or) port 5000
const PORT = process.env.PORT || 5000;
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The above was not ideal, because we have to put the routes manually
// for every single page have separate routes
// What we want a static folder for all as below
const express = require('express');
const path = require('path');
const app = express();

// - Set a static folder
// - Get ride of the .HTML from address
// https://stackoverflow.com/questions/16534545/how-to-get-rid-of-html-extension-when-serving-webpages-with-node-js
app.use(express.static(path.join(__dirname, 'public'), { 'extensions': ['html'] }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// http://localhost:5000/
// http://localhost:5000/about
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating the route
const express = require('express');
const path = require('path');
const app = express();

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
// or render templates so we can render dynamic data
// creating a simple REST API, we are not going to deal with database
// just hard coding array of objects/members
// We want to return it as JSON
// This is the approach we can use with Vue
// For now, we use Postman, getting all the members
app.get('/api/members', (req, res) => res.json(members));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Use postman app and use GET for http://localhost:5000/api/members
*/


/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const express = require('express');
const path = require('path');
// adding moment for formatting dates
const moment = require('moment');
// moved the hard coded JSON to a different file
const members = require('./Members');
const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Use postman app and use GET for http://localhost:5000/api/members
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating the route
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Use postman app and use GET
// for all using http://localhost:5000/api/members
// To see only 1 member use like:
// http://localhost:5000/api/members2
// To get error for member not exist use:
// http://localhost:5000/api/members6
// */


/*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// We can use Router which comes with express to put all our similar routes
// into a single file
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Use postman app and use GET
// for all using http://localhost:5000/api/members
// To see only 1 member use like:
// http://localhost:5000/api/members2
// PROBLEM GETTING ERROR -- INVESTIGATE
// To get error for member not exist use:
// http://localhost:5000/api/members6
*/

// /*
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// now we go to members.js and create a member
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

// Init body parser middleware
// to handel raw JSON
app.use(express.json());
// to handel urlencoded data
app.use(express.urlencoded({ extended: false }));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

// Use postman app and use GET
// for all using http://localhost:5000/api/members
// To see only 1 member use like:
// http://localhost:5000/api/members2
// PROBLEM GETTING ERROR -- INVESTIGATE
// To get error for member not exist use:
// http://localhost:5000/api/members6
// */
