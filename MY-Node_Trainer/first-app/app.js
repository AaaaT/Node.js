// console.log(module);

const log = require('./logger.js')
// console.log(log);

//log.log(); //message - from exported object
   //or
log(); //message - from exported function



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