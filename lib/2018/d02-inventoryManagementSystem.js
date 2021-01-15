module.exports = (data) => {
  let numTwoLetterDups = 0;
  let numThreeLetterDups = 0;
  let isTwoLetterDup;
  let isThreeLetterDup;
  data.split('\n').forEach(boxID => {
    isTwoLetterDup = false
    isThreeLetterDup = false
    let dataCounts = {}
    boxID.split('').forEach(letter => {
      dataCounts[letter] = dataCounts[letter] ? dataCounts[letter] += 1 : 1
    })
    for (letter in dataCounts) {
      if (dataCounts[letter] === 2) isTwoLetterDup = true
      if (dataCounts[letter] === 3) isThreeLetterDup = true
    }
    if (isTwoLetterDup) numTwoLetterDups += 1
    if (isThreeLetterDup) numThreeLetterDups += 1
  })
  return numTwoLetterDups * numThreeLetterDups;
}
