const offByOne = require('./offByOne');

module.exports = (data) => {
  const boxIds = data.split('\n');
  let match;
  let boxIndex = -1;
  while (!match) {
    boxIndex += 1;
    const checkList = [
      ...boxIds.slice(0, boxIndex),
      ...boxIds.slice(boxIndex, boxIds.length)
    ]
    match = checkList.find(function(boxId) {
      return offByOne(boxIds[boxIndex], boxId);
    });
  }
  const matchingLetters = boxIds[boxIndex].split('').reduce((matchingLetters, character, index) => {
    return matchingLetters + (character === match[index] ? character : '')
  }, '')
  return matchingLetters
}
