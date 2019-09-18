'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

function showHelp() {
  fs.readFile('src/help.txt', 'utf8', function(err, data) {
    if (err) {
      console.log('Error: cannot read the Help file');
    }
    else {
      fs.writeFile('src/writeHelp.txt', data); 
    }
    console.log(data);
  });
}

console.log(showHelp);
