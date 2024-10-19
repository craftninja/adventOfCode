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
  parseGameRecord: (rawGameRecord) => {
    const rawGameNumberAndRawData = rawGameRecord.split(": ")
    const gameNumber = rawGameNumberAndRawData[0].split(" ")[1]
    const gameData = rawGameNumberAndRawData[1].split("; ").map(rawGameDataSet => {
      return cubeConundrum.parseCubeSet(rawGameDataSet)
    })
    return [gameNumber, gameData]
  },
  parseGameRecords: (rawGameRecords) => {
    const rawGameRecordsNoTrailingEmptyLine = rawGameRecords
    .endsWith("\n") ?
      rawGameRecords.substring(0, rawGameRecords.length - 1) :
      rawGameRecords
    const entries = rawGameRecordsNoTrailingEmptyLine
    .split("\n")
    .map(rawGameRecord => {
      return cubeConundrum.parseGameRecord(rawGameRecord)
    })

    let gameRecord = Object.fromEntries(new Map(entries))
    return gameRecord
  }
}

module.exports = cubeConundrum
