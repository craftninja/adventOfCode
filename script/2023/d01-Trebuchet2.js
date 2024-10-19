const fs = require('fs');

const trebuchet2 = require('../../lib/2023/d01-trebuchet2');
const data = fs.readFileSync('./fixtures/2023/d01-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(trebuchet2(data))
