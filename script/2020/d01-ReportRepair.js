const fs = require('fs');

const reportRepair = require('../../lib/2020/d01-reportRepair');
const data = fs.readFileSync('./fixtures/2020/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(reportRepair(data))
