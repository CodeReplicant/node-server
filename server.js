const http = require('http');
const fs = require('fs');


const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {


res.writeHead(200, { 'Content-Type':  'application/json' });
  
  // Lea tareas del JSON tasks.json
  fs.readFile('task.json', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
        res.write(data);
      res.end();
    }

  });//finaliza lectura


});//finaliza creacion de server

server.listen(port, host,  () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = server;
