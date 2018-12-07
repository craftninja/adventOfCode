module.exports = (stringToCalculate) => {
  const frequencyChanges = stringToCalculate.split('\n');
  let resultantFrequencies = [0];
  let noDupes = true;
  let currentFreqToDiff = 0;
  let sumIndex = 0;
  let newFrequency;
  while (noDupes) {
    newFrequency = resultantFrequencies[sumIndex] + Number(frequencyChanges[currentFreqToDiff])
    if (resultantFrequencies.includes(newFrequency)) {
      noDupes = false
    }
    currentFreqToDiff =
      currentFreqToDiff === frequencyChanges.length - 1 ?
      0 : currentFreqToDiff + 1
    sumIndex += 1
    resultantFrequencies.push(newFrequency)
  }
  return resultantFrequencies[sumIndex]
}
