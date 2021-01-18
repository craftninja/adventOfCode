const fs = require('fs');

const tobogganTrajectory = require('../../lib/2020/d03-TobogganTrajectory');
const data = fs.readFileSync('./fixtures/2020/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(tobogganTrajectory(data))
