const fs = require('fs');

const mullItOver = require('../../lib/2024/d03-mullItOver');
const data = fs.readFileSync('./fixtures/2024/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(mullItOver.mulSumCorruptedMemory(data))
