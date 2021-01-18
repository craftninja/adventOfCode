const fs = require('fs');

const passwordPhilosophy2 = require('../../lib/2020/d02-passwordPhilosophy2');
const data = fs.readFileSync('./fixtures/2020/d02-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(passwordPhilosophy2(data))
