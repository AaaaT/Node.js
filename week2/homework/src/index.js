'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

function showHelp() {
  fs.readFile('help.txt', 'utf8', function(err, data) {
    console.log(err, 'Error: cannot read the Help file');
    console.log(data); // help.txt contents
  });
};
showHelp();
