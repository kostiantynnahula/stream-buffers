import fs from 'fs';
import zlib from 'zlib';

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const compressStream = zlib.createGzip();

// read / write stream
// readStream.on('data', (chunk) => {
//   writeStream.write('\n === start chunk === \n');
//   writeStream.write(chunk);
//   writeStream.write('\n === end chunk === \n');
// });

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
};

// duplex stream
readStream
  .on('error', handleError)
  .pipe(compressStream) // compress data
  .pipe(writeStream)
  .on('error', handleError);
