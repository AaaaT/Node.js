'use strict';

const fs = require('fs');

// Read and Write Synchronous Files
const readHelp = fs.readFileSync('help.txt', 'utf8');
console.log(readHelp);
fs.writeFileSync('writeHelp.txt', readHelp);

// -------------------------------------------------------

// Read Asynchronous Files
fs.readFile('help.txt', 'utf8', function(err, data) {
  console.log(err); // null
  console.log(data); // help.txt contents
});
console.log('test'); // runs too

// -------------------------------------------------------

// Read and Write Asynchronous Files
fs.writeFile('writeHelp2.txt', 'Another Help', function(err) {
  if (err) throw err;
  console.log('Saved!');
});
