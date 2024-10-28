const gearRatios = {
  getPossibleGearsAndPartData: (engineSchematic) => {
    let possibleGearsAndPartNumbers = []
    const gearRegex = /[*]/g
    const numberRegex = /[0-9]+/g
    const schematicLines = engineSchematic
      .split('\n')
      .filter(line => line.length > 0)
    let gearSearchWip
    schematicLines.forEach((line, lineNumber) => {
      while ((gearSearchWip = gearRegex.exec(line)) !== null) {
        const gearIndex = gearSearchWip.index
        const linesToSearch = [
          schematicLines[lineNumber - 1],
          line,
          schematicLines[lineNumber + 1]
        ].filter(l => l !== undefined)
        let possiblePartNumbers = []
        linesToSearch.forEach((lineToSearch, i) => {
          let numberSearchWip = undefined

          while ((numberSearchWip = numberRegex.exec(lineToSearch)) !== null) {
            const numberIsTouching = numberSearchWip.index >= gearIndex - numberSearchWip[0].length && numberSearchWip.index <= gearIndex + 1
            if (numberIsTouching) {
              possiblePartNumbers.push(Number(numberSearchWip[0]))
            }
          }
        });

        possibleGearsAndPartNumbers.push(possiblePartNumbers)
      }
    })
    return possibleGearsAndPartNumbers
  },
  sumGearRatiosFromSchematic: (engineSchematic) => {
    const possibleGearsAndPartNumbers = gearRatios.getPossibleGearsAndPartData(engineSchematic)
    const gearsAndParts = possibleGearsAndPartNumbers.filter(gearAndParts => gearAndParts.length === 2)
    const gearsAndPartProducts = gearsAndParts.map(gearAndParts => {
      return gearAndParts[0] * gearAndParts[1]
    })

    return gearRatios.sumArray(gearsAndPartProducts)
  },
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
