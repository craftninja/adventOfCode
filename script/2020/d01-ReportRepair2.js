const fs = require('fs');

const reportRepair2 = require('../../lib/2020/d01-reportRepair2');
const data = fs.readFileSync('./fixtures/2020/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(reportRepair2(data))
