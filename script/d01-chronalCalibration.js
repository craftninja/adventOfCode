const fs = require('fs');

const chronalCalibration = require('../lib/d01-chronalCalibration');
const data = fs.readFileSync('./fixtures/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(chronalCalibration(data))
