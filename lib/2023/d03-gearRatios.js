const gearRatios = {
  sumPartNumbersFromSchematic: (engineSchematic) => {
    const schematicLines = engineSchematic.split('\n')

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
        const index = possiblePartNumbersIndices[i]
        const nextToSymbol =
          (line[index-1] && line[index-1].match(/[^0-9.\n]/g)) ||
          line[index+possiblePartNumber.length].match(/[^0-9.\n]/g)
        if (nextToSymbol) {
          partNumbers.push(Number(possiblePartNumber))
        }
        // √ look at same row i-1 and i+1... do they have symbol?
        // look at row above from i-1 to i+length+1... do they have symbol?
        // look at row below from i-1 to i+1... do they have symbol?
        // if any have a symbol, grab the number and
        // add it to the parts list
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
