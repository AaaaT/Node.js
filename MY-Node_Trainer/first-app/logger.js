// (function (exports, require, module, __filename, __dirname) { 
// Node creates a function while exporting - Module Wrapper Function

    console.log(__filename);  //C:\Users\AnnGa\Desktop\Node_Trainer\first-app\logger.js
    console.log(__dirname); //C:\Users\AnnGa\Desktop\Node_Trainer\first-app


    const url = 'http://mylogger.io/log'; //imaginary address

    function log (message){
        //Send and HTTP request
        console.log('Hello from the Logger');
    }

    module.exports = log; // exporting a single function only
    // exports.log = log; //reference to module.exports
    // module.exports.log = log; // exporting one object
    // module.exports.url = url; //or
    // module.exports.endPoint = url; //externally named
// })