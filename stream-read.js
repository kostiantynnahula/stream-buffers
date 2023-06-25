import fs from 'fs';
import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./docs/big.file');
  src.pipe(res);
});

server.listen(8000);