module.exports = (stringA, stringB) => {
  const numDiffs = stringA.split('').reduce((allDiffs, character, index) => {
    const thisDiff = character === stringB[index] ? 0 : 1
    return allDiffs + thisDiff
  }, 0)
  return numDiffs === 1
}
