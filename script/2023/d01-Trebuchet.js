const fs = require('fs');

const trebuchet = require('../../lib/2023/d01-trebuchet');
const data = fs.readFileSync('./fixtures/2023/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(trebuchet(data))
