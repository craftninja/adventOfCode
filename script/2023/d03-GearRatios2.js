const fs = require('fs');

const gearRatios = require('../../lib/2023/d03-gearRatios');
const data = fs.readFileSync('./fixtures/2023/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(gearRatios.sumGearRatiosFromSchematic(data))
