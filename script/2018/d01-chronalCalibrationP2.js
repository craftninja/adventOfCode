const fs = require('fs');

const chronalCalibration = require('../../lib/2018/d01-chronalCalibrationP2');
const data = fs.readFileSync('./fixtures/2018/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(chronalCalibration(data))
