const fs = require('fs');

const scratchcards = require('../../lib/2023/d04-scratchcards');
const data = fs.readFileSync('./fixtures/2023/d04-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(scratchcards.sumOfScratchcardPoints(data))
