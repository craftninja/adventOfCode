const fs = require('fs');

const ifYouGiveASeedAFertilizer = require('../../lib/2023/d05-ifYouGiveASeedAFertilizer');
const data = fs.readFileSync('./fixtures/2023/d05-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});

console.log(ifYouGiveASeedAFertilizer.closestLocationOfSeedSite(data))
