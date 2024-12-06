const fs = require('fs');

const ceresSearch = require('../../lib/2024/d04-ceresSearch');
const data = fs.readFileSync('./fixtures/2024/d04-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(ceresSearch.countXofMAS(data))
