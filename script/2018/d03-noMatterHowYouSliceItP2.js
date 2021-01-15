const fs = require('fs');

const noMatterHowYouSliceIt = require('../../lib/2018/d03-noMatterHowYouSliceItP2');
const data = fs.readFileSync('./fixtures/2018/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(noMatterHowYouSliceIt(data))
