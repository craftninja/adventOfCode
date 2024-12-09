const fs = require('fs');

const printQueue = require('../../lib/2024/d05-printQueue');
const data = fs.readFileSync('./fixtures/2024/d05-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(printQueue.sumMiddlePageNumbersOfInvalidUpdates(data))
