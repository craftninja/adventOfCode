const mirageMaintenance = {
  sumExtrapolatedValues: (rawOasisData) => {
    const oasisData = rawOasisData.split('\n')
    .filter(rawRow => rawRow != '')
    .map(rawRow => rawRow.split(' ').map(num => Number(num)))

    const numbersToSum = oasisData.map(row => {
      return mirageMaintenance.generateSequences(row)[0][row.length]
    })
    return mirageMaintenance.sumArray(numbersToSum)
  },
  generateSequences: (rowOfOasisData) => {
    let thisRow = [ ...rowOfOasisData ]
    let nextRow = []
    let sequences = [[ ...thisRow ]]
    while (!thisRow.every(number => number === 0)) {
      for (let i = 0; i < thisRow.length - 1; i++) {
        nextRow.push(thisRow[i+1] - thisRow[i])
      }
      sequences.push([ ...nextRow])
      thisRow = [ ...nextRow]
      nextRow = []
    }

    for (let i = sequences.length; i !== 1; i--) {
      if (i === sequences.length) {
        sequences[i-1].push(0)
      }
      sequences[i-2].push(
        sequences[i-1][sequences[i-1].length - 1] + sequences[i-2][sequences[i-2].length - 1]
      )
    }
    return sequences
  },
  sumArray: (array) => {
    return array
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = mirageMaintenance
