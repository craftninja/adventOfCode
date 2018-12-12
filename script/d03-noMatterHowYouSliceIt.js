const fs = require('fs');

const noMatterHowYouSliceIt = require('../lib/d03-noMatterHowYouSliceIt');
const data = fs.readFileSync('./fixtures/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(noMatterHowYouSliceIt(data))
