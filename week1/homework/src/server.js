'use strict';

const http = require('http');

function createServer() {
  let state = 10;

  const server = http.createServer((request, response) => {

    console.log(request.method, request.url); //e.g. GET /10

    switch (request.url) {
      case '/state':
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;
      case '/add':
        state = state + 1;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;
      case '/subtract':
        state = state - 1;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;
      case '/reset':
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ state: state }));
        break;

      default:
        state = 10;
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ error: 'Not found' }));
        break;
    }

    response.end();
  });

  return server;
}

module.exports = {
  createServer
};
