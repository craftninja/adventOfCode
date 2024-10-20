const cubeConundrum = {
  calculateSum: (rawBagContents, rawGameRecords) => {
    const bagContents = cubeConundrum.parseCubeSet(rawBagContents);
    const gameRecords = cubeConundrum.parseGameRecords(rawGameRecords)
    return cubeConundrum.sumGameIdsOfPossibleGames(bagContents, gameRecords)
  },
  sumGameIdsOfPossibleGames: (bagContents, gameRecords) => {
    let possibleGamesIDs = []

    for (const [gameNumber, subgames] of Object.entries(gameRecords)) {
      const possibleSubgames = subgames.filter(subgame => {
        let thisGameCanBePlayed = true;
        Object.keys(subgame).forEach((cube, i) => {
          if (bagContents[cube] < subgame[cube]) {
            thisGameCanBePlayed = false
          }
        });
        return thisGameCanBePlayed
      })
      if (possibleSubgames.length === subgames.length) {
        possibleGamesIDs.push(Number(gameNumber))
      }
    }
    return cubeConundrum.sumArray(possibleGamesIDs)
  },
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
  },
  sumArray: (array) => {
    return array
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  }
}

module.exports = cubeConundrum
