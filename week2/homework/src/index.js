'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

function main() {
  console.log(process.argv)
  if (process.argv.length <= 2) {
    showHelp();
    return;
  }

  switch(process.argv[2]) {
    case 'list':
  //Shows current to-dos, or shows an appropriate text if there are no to-dos
      console.log(readList());  
      break;
    case 'add':
  // Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.
      if (process.argv.length > 3){
        let list = readList();
        list.push(process.argv[3])
        writeList(list);
      }
      else {
        console.log('Could not add an item to the list.')
      }
      break;
    case 'remove':
  // Removes a to-do item by its 1-base index, e.g. to remove second item, execute:
      if (process.argv.length > 3){
        let list = readList();
        list.splice(process.argv[3]-1, 1)
        writeList(list);
      }
      else {
        console.log('Could not remove the item from the list.')
      }
      break;
    case 'reset':
  // Removes all to-do items from the list:
      writeList([]);
      break;
    case 'help':
      showHelp();
      break;
    default:     
      break;
  }
}
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

function readList() {
  let list = fs.readFileSync('list.txt');
  return JSON.parse(list);
}


// function createTODOList() {
//   fs.writeFile('list.txt', 'List of To-Do-s', function(err) {
//     if (err) throw err;
//     console.log('List created!');
//   });
// };
// // createTODOList();

function writeList(list) {
  fs.writeFileSync ('list.txt', JSON.stringify(list))
}
