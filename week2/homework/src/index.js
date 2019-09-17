'use strict';

// TODO: Write the homework code in this file
const fs = require ('fs');

const readHelp = fs.readFileSync('src/help.txt', 'utf8');
console.log(readHelp);
