// create a buffer with byte size of 6
const buf = Buffer.alloc(6);
// write string to predefined buffer
const length = buf.write('Test buffer message'); // buf will store "Test b"

const buf1 = Buffer.from('x');
const buf2 = Buffer.from('x');
const buf1Buf2compare = Buffer.compare(buf2, buf1); // return 0 if buffers is equal

const bufa = Buffer.from('Hello');
const bufb = Buffer.from(' word');
const concutedBuf = Buffer.concat([bufa, bufb]); // concut array of buffers

for (const [, item] of concutedBuf.entries()) { // return index and buffer from buffer data
  const char = String.fromCharCode(item);// convert byte number to char string
}

const filledArr = Buffer.alloc(10).fill('a'); // allocate and fill buffer value

const includeTest = bufa.includes('llo'); // check is buffer includes value

const slicedBuf = bufa.slice(2, 4).toString(); // slice buff 