const fs = require('fs');

const cosmicExpansion = require('../../lib/2023/d11-cosmicExpansion');
const data = fs.readFileSync('./fixtures/2023/d11-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies2(
  data,
  1_000_000
))
