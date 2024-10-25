const gearRatios = {
  sumPartNumbersFromSchematic: (engineSchematic) => {
    const schematicLines = engineSchematic.split('\n').filter(line => line.length > 0)

    let partNumbers = []
    schematicLines.forEach((line, lineNumber) => {
      const possiblePartNumbers = line.match(/[0-9]+/g)
      if (!possiblePartNumbers) return
      let searchIndex = 0
      const possiblePartNumbersIndices = possiblePartNumbers.map(possiblePartNumber => {
        searchIndex = line.indexOf(possiblePartNumber, searchIndex)
        return searchIndex
      })

      possiblePartNumbers.forEach((possiblePartNumber, i) => {
        let charsToCheck = []
        const startingIndex = possiblePartNumbersIndices[i]
        for (
          let currentIndex = startingIndex - 1;
          currentIndex <= startingIndex + possiblePartNumber.length;
          currentIndex++
        ) {

          if (currentIndex >= 0 && currentIndex < line.length) {
            if (lineNumber > 0) {
              charsToCheck.push(schematicLines[lineNumber - 1][currentIndex])
            }
            if (lineNumber < schematicLines.length - 1) {
              charsToCheck.push(schematicLines[lineNumber + 1][currentIndex])
            }
          }
        }
        if (line[startingIndex-1]) {
          charsToCheck.push(line[startingIndex-1])
        }
        if (line[startingIndex+possiblePartNumber.length]) {
          charsToCheck.push(line[startingIndex+possiblePartNumber.length])
        }

        const thisIsAPartNumber = charsToCheck.some(char => {
          return char.match(/[^0-9.\n]/g)
        })
        if (thisIsAPartNumber) {
          partNumbers.push(Number(possiblePartNumber))
        }
      });

    });
    const sumOfPartNumbers = gearRatios.sumArray(partNumbers)
    return sumOfPartNumbers
  },
  sumArray: (array) => {
    return array
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = gearRatios
