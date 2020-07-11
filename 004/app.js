
/*
const fs = require('fs');

// reading files
// +++++++++++++++++++++++++++++++++++++++++++++++++++
fs.readFile('./docs/test1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  // The result is something as below
  // <Buffer 48 65 6c 6c 6f 20 67 75 79 73 0d 0a>
  // The buffer is a package of data being send
  console.log(data.toString());
});

// If we notice the "last line" get executed first due to nature of
// asynchronously node
console.log('last line');

// writing files
fs.writeFile('./docs/test1.txt', 'Hello, world!', () => {
  console.log('file was written');
})

// if the file is not exist is creates new file
fs.writeFile('./docs/test2.txt', 'Hello, world again!', () => {
  console.log('file was written');
})
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
// +++++++++++++++++++++++++++++++++++++++++++++++++++
const fs = require('fs');

// directories
// checking first, synchronously waits for it
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
// +++++++++++++++++++++++++++++++++++++++++++++++++++
const fs = require('fs');

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted');
  })
} else {
  console.log('file already deleted!');
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++
*/

