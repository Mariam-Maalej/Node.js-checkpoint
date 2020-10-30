const http = require("http");

let server = http.createServer((request, response) => {
  if(error) console.log('error', error)
  response.write("HELLO WORLD");
  response.end();
});

server.listen(4000);
