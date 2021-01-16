const fs = require('fs');

const passwordPhilosophy = require('../../lib/2020/d02-passwordPhilosophy');
const data = fs.readFileSync('./fixtures/2020/d02-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(passwordPhilosophy(data))
