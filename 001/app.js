// Global object
// console.log(global);

/*
//  ++++++++++++++++++++++++++++++++
// waiting 3 seconds
global.setTimeout(() => {
  console.log('In the timeout')
}, 3000);
//  ++++++++++++++++++++++++++++++++
*/

/*
//  ++++++++++++++++++++++++++++++++
setTimeout(() => {
  console.log('In the timeout');
}, 3000);

// Keep run it every second
const int = setInterval(() => {
  console.log('In the interval');
}, 1000)
// ++++++++++++++++++++++++++++++
*/

/*
// ++++++++++++++++++++++++++++++
// setTimeout stops the setInterval after 3 seconds
setTimeout(() => {
  console.log('In the timeout');
  clearInterval(int);
}, 3000);

// Keep run it every second
const int = setInterval(() => {
  console.log('In the interval');
}, 1000)
// ++++++++++++++++++++++++++++++
*/

/*
// +++++++++++++++++++++++++++++
// Gets absolute dir name
console.log(__dirname);
// Gets absolute file name
console.log(__filename);
// ++++++++++++++++++++++++++++
*/
