module.exports = {
  parseCubeSet: (rawCubeSet) => {
    const colorSets = rawCubeSet.split(", ").map(rawCubeDatum => {
      return [
        rawCubeDatum.split(" ")[1], Number(rawCubeDatum.split(" ")[0])
      ]
    })

    const entries = new Map(colorSets)
    return Object.fromEntries(entries)
  },
  parseGameRecords: (rawGameRecords) => {
    const rawGameNumberAndRawData = rawGameRecords.split(": ")
    const gameNumber = rawGameNumberAndRawData[0].split(" ")[1]
    const gameData = rawGameNumberAndRawData[1].split("; ").map(rawGameDataSet => {
      return cubeConundrum.parseCubeSet(rawGameDataSet)
    })
    let gameRecord = Object.fromEntries(new Map([[gameNumber, gameData]]))
    return gameRecord
  }
}

module.exports = cubeConundrum
