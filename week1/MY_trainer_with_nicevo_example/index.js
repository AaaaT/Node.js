
                            //STEP1
// const { format, formatDistance, formatRelative, subDays } = require('date-fns')

// function hello () {
// //   console.log('Hello World!')
//   const now = new Date()
//   console.log(format(now, "'Today is 'iiii"))
//   console.log(formatDistance(subDays(now, 3), now))
//   console.log(formatRelative(subDays(now, 3), now))
// }
// hello()


                            //STEP2
// const http = require('http');

// function createServer() {
//   http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.write(JSON.stringify({ greeting: 'Hello World!' }));
//     res.end();
//   }).listen(8080);
//   console.log("Server started on: http://localhost:8080/");
// }

// createServer();


//                               //STEP3
// const http = require('http');

// function createServer() {
//   http.createServer(function (req, res) {
//     if (req.url =="/hello"){
//       res.writeHead(200, {"Content-Type": "application/json"});
//       res.write(JSON.stringify({ greeting: 'Hello Anna!' }));
//     }else {
//       res.writeHead(404, {"Content-Type": "application/json"});
//       res.write(JSON.stringify({ error: 'Error' }));
//     }
//     res.end();
//   })
//   .listen(8080);
//   console.log("Server started on: http://localhost:8080/");
// }

// createServer();


                                  //STEP4
const http = require('http');

function createServer() {
    http.createServer(function (req, res) {
      switch (req.url){
       case "/hello":
         res.writeHead(200, {"Content-Type": "application/json"});
         res.write(JSON.stringify({ greeting: 'Hello Anna!' }));
         break;
      default:
         res.writeHead(404, {"Content-Type": "application/json"});
         res.write(JSON.stringify({ error: 'Error' }));
    }
    res.end();
  })
  .listen(8080);
  console.log("Server started on: http://localhost:8080/");
}
createServer();
