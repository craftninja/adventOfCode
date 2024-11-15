const fs = require('fs');

const hauntedWasteland = require('../../lib/2023/d08-hauntedWasteland');
const data = fs.readFileSync('./fixtures/2023/d08-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(hauntedWasteland.calculateStepsToxxZ(data))
