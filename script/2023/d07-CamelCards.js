const fs = require('fs');

const camelCards = require('../../lib/2023/d07-camelCards');
const data = fs.readFileSync('./fixtures/2023/d07-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(camelCards.calculateWinnings(data))
