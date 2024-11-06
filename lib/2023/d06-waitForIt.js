const waitForIt = {
  productOfNumberOfWaysToWinForEachRace: (rawRaceResults) => {
    const raceResults = waitForIt.raceResults(rawRaceResults);
    const waysToWin = waitForIt.waysToWin(raceResults);
    return waitForIt.productOfArray(waysToWin)
  },
  productOfNumberOfWaysToWinForEachRace2: (rawRaceResults) => {
    const raceResults = waitForIt.raceResults2(rawRaceResults);
    const waysToWin = waitForIt.waysToWin(raceResults);
    return waitForIt.productOfArray(waysToWin)
  },
  raceResults: (rawRaceResults) => {
    const rawTimeAndDistance = rawRaceResults.split('\n')
    const timeResults = rawTimeAndDistance[0].split("Time:")[1].split(" ").filter(result => result != '').map(result => Number(result))
    const distanceResults = rawTimeAndDistance[1].split("Distance:")[1].split(" ").filter(result => result != '').map(result => Number(result))
    if (timeResults.length != distanceResults.length) {
      throw new Error("Time and Distance data unequal")
    }
    return timeResults.map((raceTime, i) => {
      return {time: raceTime, distance: distanceResults[i]}
    })
  },
  raceResults2: (rawRaceResults) => {
    const rawTimeAndDistance = rawRaceResults.split('\n')
    const time = Number(
      rawTimeAndDistance[0].split("Time:")[1].replaceAll(" ", "")
    )
    const distance = Number(
      rawTimeAndDistance[1].split("Distance:")[1].replaceAll(" ", "")
    )
      return [{time, distance}]
  },
  waysToWin: (raceResults) => {
    return raceResults.map(result => {
      let count = 0
      for (let buttonTime = 1; buttonTime < result.time; buttonTime++) {
        const distance = buttonTime * (result.time - buttonTime)
        if (distance > result.distance) {
          count += 1
        }
      }
      return count
    })
  },
  productOfArray: (array) => {
    return array
    .reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1,
    );
  },
}

module.exports = waitForIt
