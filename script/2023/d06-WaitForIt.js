const fs = require('fs');

const waitForIt = require('../../lib/2023/d06-waitForIt');
const data = fs.readFileSync('./fixtures/2023/d06-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(waitForIt.productOfNumberOfWaysToWinForEachRace(data))
