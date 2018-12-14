const fs = require('fs');

const noMatterHowYouSliceIt = require('../lib/d03-noMatterHowYouSliceItP2');
const data = fs.readFileSync('./fixtures/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(noMatterHowYouSliceIt(data))
