const fs = require('fs');

const historianHysteria = require('../../lib/2024/d01-historianHysteria');
const data = fs.readFileSync('./fixtures/2024/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(historianHysteria.sumOfSimilarityScores(data))
