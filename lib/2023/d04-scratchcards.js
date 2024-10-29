const scratchcards = {
  sumOfScratchcardPoints: (rawScratchcards) => {
    const scratchcardList = rawScratchcards
      .split('\n')
      .filter(line => line.length > 0)
    const cardsPoints = scratchcardList.map(scratchcard => {
      const allNumbers = scratchcard.split(": ")[1].split(" | ")
      const winningNumbers = allNumbers[0]
        .split(" ")
        .filter(number => { return number.length > 0})
      const pickedNumbers = allNumbers[1].split(" ")
      const matches = winningNumbers.filter(winningNumber => {
        return pickedNumbers.includes(winningNumber)
      })
      return matches.length === 0 ? 0 : Math.pow(2, matches.length - 1)
    })
    return scratchcards.sumArray(cardsPoints)
  },
  sumArray: (array) => {
    return array
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = scratchcards
