'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

function main(()=>{
  switch()
    case '/list':
  //Shows current to-dos, or shows an appropriate text if there are no to-dos
      break;
    case '/add':
  // Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.
      break;
    case '/remove':
  // Removes a to-do item by its 1-base index, e.g. to remove second item, execute:
      break;
    case '/reset':
  // Removes all to-do items from the list:
      break;
    default '/help':
    showHelp();
      break;
  
  });
  main();

//Functions one by one
function showHelp() {
  fs.readFile('help.txt', 'utf8', function(err, data) {
    if (err) {
      console.log(err, 'Error: cannot read the Help file');
    }
    else {
      console.log(data); // help.txt contents
    }
  });
};
showHelp();

function createTODOList() {
  fs.writeFile('list.txt', 'List of To-Do-s', function(err) {
    if (err) throw err;
    console.log('List created!');
  });
};
createTODOList();
