const historianHysteria = {
  sumOfOrderedDifferences: (rawLists) => {
    return historianHysteria.sumArray(
      historianHysteria.getDiffs(
        historianHysteria.orderedParsedLists(
          rawLists)))
  },
  sumOfSimilarityScores: (rawLists) => {
    return historianHysteria.sumArray(
      historianHysteria.getSimilarityScores(
        historianHysteria.orderedParsedLists(
          rawLists)))
  },
  orderedParsedLists: (rawLists) => {
    let lists = [[], []]
    rawLists.split('\n').filter(row => row != '').forEach((row, i) => {
      lists[0].push(Number(row.split('   ')[0]))
      lists[1].push(Number(row.split('   ')[1]))
    });
    lists[0].sort()
    lists[1].sort()
    return lists
  },
  getDiffs: (lists) => {
    let diffs = []
    for (let i = 0; i < lists[0].length; i++) {
      diffs.push(Math.abs(lists[1][i] - lists[0][i]))
    }
    return diffs
  },
  getSimilarityScores: (lists) => {
    let similarityScores = []
    for (let i = 0; i < lists[0].length; i++) {
      similarityScores.push(
        lists[1].filter( locationId => locationId === lists[0][i]).length * lists[0][i]
      )
    }
    return similarityScores
  },
  sumArray: (array) => {
    return array
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = historianHysteria
