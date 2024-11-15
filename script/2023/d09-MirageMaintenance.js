const fs = require('fs');

const mirageMaintenance = require('../../lib/2023/d09-mirageMaintenance');
const data = fs.readFileSync('./fixtures/2023/d09-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(mirageMaintenance.sumExtrapolatedValues(data))
