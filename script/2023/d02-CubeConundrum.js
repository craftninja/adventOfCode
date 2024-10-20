const fs = require('fs');

const cubeConundrum = require('../../lib/2023/d02-cubeConundrum');
const data = fs.readFileSync('./fixtures/2023/d02-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});
const bagContents = "12 red, 13 green, 14 blue"

console.log(cubeConundrum.calculateSum(bagContents, data))
