const fs = require('fs');

const redNosedReports = require('../../lib/2024/d02-redNosedReports');
const data = fs.readFileSync('./fixtures/2024/d02-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(redNosedReports.numberOfSafeReportsWithProbDamp(data))
