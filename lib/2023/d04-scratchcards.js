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
    return scratchcards.sumArrayRemovingNaNs(cardsPoints)
  },
  numberResultingScratchcards: (rawScratchcards) => {
    const scratchcardList = rawScratchcards
      .split('\n')
      .filter(line => line.length > 0)
    let scratchcardMultiplier = Array.from(scratchcardList, (card) => 1)
    const cardCounts = scratchcardList.map((scratchcard, i) => {
      const allNumbers = scratchcard.split(": ")[1].split(" | ")
      const winningNumbers = allNumbers[0]
        .split(" ")
        .filter(number => { return number.length > 0})
      const pickedNumbers = allNumbers[1].split(" ")
      const matches = winningNumbers.filter(winningNumber => {
        return pickedNumbers.includes(winningNumber)
      })
      const startingMultiplier = scratchcardMultiplier[i]
      matches.forEach((match, matchIndex) => {
        scratchcardMultiplier[i + 1 + matchIndex] += startingMultiplier
      });
    })
    return scratchcards.sumArrayRemovingNaNs(scratchcardMultiplier)
  },
  sumArrayRemovingNaNs: (array) => {
    return array
    .filter(number => !isNaN(number))
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = scratchcards
