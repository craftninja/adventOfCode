const gearRatios = {
  sumPartNumbersFromSchematic: (engineSchematic) => {
    const schematicLines = engineSchematic.split('\n').filter(line => line.length > 0)

    const numberRegex = /[0-9]+/g

    let partNumbers = []
    let result
    schematicLines.forEach((line, lineNumber) => {
      let possiblePartNumbers = []
      let possiblePartNumbersIndices = []
      while ((result = numberRegex.exec(line)) !== null) {
        possiblePartNumbers.push(result[0])
        possiblePartNumbersIndices.push(result.index)
      }

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
