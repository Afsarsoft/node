const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// get all members
router.get('/', (req, res) => res.json(members));

// get single member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }

});

// Create Member, we create a post request
// Go to the Postman and send some data
router.post('/', (req, res) => {
  // Just for testing from Postman, sending it back
  // res.send(req.body);
  // what we want to create a new member
  // Databases usually can create the ID for us.
  // we are going to use uuid to generate random ID for us
  const newMember = {
    // generating universal random IDs
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }


  // Running to issues, unexpected results investigate ....!!!!
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);

});



module.exports = router;
