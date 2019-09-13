'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer() {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here

    // response.write('Hello Anna!');
  
    // const dataStructure = {'greeting':'hello you'};
    // const text = JSON.stringify(dataStructure);
    // response.write(text);
    console.log(request.method, request.url); //e.g. GET /10
    // console.log('hello world');

    switch (request.url) {
      case '/state':
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;
      case '/add':
        state = state + 1
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;
      case '/subtract':
        state = state - 1
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;
      case '/reset':
        state = 10
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;

      default:
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ error: 'Not Found' }));
        break;

    }

    response.end();
  });

  return server;
}

module.exports = {
  createServer
};
