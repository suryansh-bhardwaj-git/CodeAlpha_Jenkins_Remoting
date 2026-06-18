const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Jenkins Remoting Project — Built on Remote Agent\n');
}).listen(PORT, () => console.log(`Running on port ${PORT}`));
