// For large data, we should use Streams
// enables us to start using data before it has finished loading

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++
const fs = require('fs');

const readStream = fs.createReadStream('./docs/test1.txt');
// .on is the event listener
// getting the data in chunks
readStream.on('data', (chunk) => {
  console.log('----------------- New CHUNK --------------');
  console.log(chunk);
  console.log(chunk.toString());
});
// ++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++
const fs = require('fs');

// The following makes it readable format, no need for toString()
const readStream = fs.createReadStream('./docs/test1.txt', { encoding: 'utf8' });
readStream.on('data', (chunk) => {
  console.log('----------------- New CHUNK --------------');
  console.log(chunk);
});
// ++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Writing to the new file
const fs = require('fs');

const readStream = fs.createReadStream('./docs/test1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/test2.txt');
readStream.on('data', (chunk) => {
  console.log('----------------- New CHUNK --------------');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});
// ++++++++++++++++++++++++++++++++++++++++++++++++
*/

/*
// ++++++++++++++++++++++++++++++++++++++++++++++++
const fs = require('fs');

// Easier, using pipe for readable and writable sources
const readStream = fs.createReadStream('./docs/test1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/test2.txt');
readStream.pipe(writeStream);
// ++++++++++++++++++++++++++++++++++++++++++++++++
*/

