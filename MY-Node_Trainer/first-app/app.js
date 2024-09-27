
/*continue from 1:03:09*/



//------------------Events (the same with an Arrow function)
const EventEmitter = require('events');
const emitter = new EventEmitter();
// Register a listener
emitter.on('messageLogged', (arg) => {
   console.log('Listener called', arg);
})
// Raise an event
emitter.emit('messageLogged',  {id:1, url: 'http://'});

// Raise: logging (data: message) 
//My excercise
emitter.on('Hej logged', (message) => {
   console.log('Hej called', message);
});
emitter.emit('Hej logged', {id:'Hej-hej'} );




//   //------------------Events / Event Arguments
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// // Register a listener
// emitter.on('messageLogged', function(arg){ //or e, eventArg
//    console.log('Listener called', arg);
// })
// //emitter.addListener is the same as emitter.on

// // Raise an event
// emitter.emit('messageLogged',  {id:1, url: 'http://'});
// // making a noise, produce - signal that an event has happened




//   //-----------------File System Module
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

//          // put some character instead of './' to throw and check an error
// fs.readdir('./', function(err, files){
//    if (err) console.log('Error', err);
//    else console.log('Result:', files);
// })

  
//   //-----------------Information about my operating system - OS
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free Memory:  ' + freeMemory);

//   //------------Path
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);



//   //-------------------Exporting Functions and Objects
// console.log(module);
// const log = require('./logger.js')
// // console.log(log);
// //log.log(); //message - from exported object
//    //or
// log(); //message - from exported function


//   //--------------------Global Scope in Node.js
// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello('Anna');
// // console.log(window); //is not defined, unlike the browser, Node does not have it

// // Global Objects in Javascript, they all belong to the *window* object
// console.log(); 
// setTimeout(); //callback after a while (specified time)
// clearTimeout(); //the opposite of setTimeout

// setInterval(); //repeatedly call a function...
// clearInterval(); //stop the function from being called repeatedly?

// //e.g.

// window.console.log === console.log //is the same for the browser but not Node
// var message = '';
// window.message

// //Node does not have window, but it has *global*
// global.setTimeout
// global.console.log

// var message='';
// console.log(global.message); //undefined, because the var message is scoped to this file only, not available globally

// var sayHello = function (){
// console.log('Hejhej')
// }
// sayHello(); //Hejhej
// window.sayHello(); //window is not defined


// console.log(module); // shows a JSON object, it is the app.js stuff