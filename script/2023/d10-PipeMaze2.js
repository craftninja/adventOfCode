const fs = require('fs');

const pipeMaze = require('../../lib/2023/d10-pipeMaze');
const data = fs.readFileSync('./fixtures/2023/d10-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(pipeMaze.nestSize(data))
