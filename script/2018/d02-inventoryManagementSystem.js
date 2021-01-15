const fs = require('fs');

const inventoryManagementSystem = require('../../lib/2018/d02-inventoryManagementSystem');
const data = fs.readFileSync('./fixtures/2018/d02-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(inventoryManagementSystem(data))
