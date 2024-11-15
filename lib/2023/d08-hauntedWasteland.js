const hauntedWasteland = {
  calculateStepsToZZZ: (rawDirAndCoordinateMap) => {
    return hauntedWasteland.followDirectionsCountingSteps(
      hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap)
    )
  },
  calculateStepsToxxZ: (rawDirAndCoordinateMap) => {
    return hauntedWasteland.followDirectionsCountingSteps2(
      hauntedWasteland.parseDirAndCoordinateMap(rawDirAndCoordinateMap)
    )
  },
  followDirectionsCountingSteps: (dirAndCoordinateMap) => {
    const {directions, coordinateMap} = dirAndCoordinateMap
    let steps = 0
    let directionPlace = 0
    let currentLocation = 'AAA'
    while (currentLocation !== 'ZZZ') {
      currentLocation = coordinateMap[currentLocation][directions[directionPlace]]
      steps +=1
      directionPlace += 1
      if (directionPlace >= directions.length) {
        directionPlace = 0
      }
    }
    return steps
  },
  followDirectionsCountingSteps2: (dirAndCoordinateMap) => {
    const {directions, coordinateMap} = dirAndCoordinateMap
    let steps = 0
    let directionPlace = 0
    let currentLocations = Object.keys(coordinateMap).filter(coordinate => coordinate[2] === 'A')
    let stepsToZByLocations = currentLocations.map(_ => 0)
    while (!stepsToZByLocations.every(s => s !== 0)) {
      currentLocations = currentLocations.map((location, i) => {
        const newCurrentLocation = coordinateMap[location][directions[directionPlace]]
        if (newCurrentLocation[2] === 'Z') {
          stepsToZByLocations[i] = steps + 1
        }
        return newCurrentLocation
      })
      steps +=1
      directionPlace += 1
      if (directionPlace >= directions.length) {
        directionPlace = 0
      }
    }

    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    const lcm = (x, y) => (x * y) / gcd(x, y);

    const lcmMultiple = (...arr) => [...arr].reduce((a, b) => lcm(a, b));

    return lcmMultiple(...stepsToZByLocations)
  },
  parseDirAndCoordinateMap: (rawDirAndCoordinateMap) => {
    const rawDirAndCoordinateMapSet = rawDirAndCoordinateMap.split('\n\n')
    const directions = rawDirAndCoordinateMapSet[0]
    const coordinateMap = rawDirAndCoordinateMapSet[1]
    .split('\n')
    .reduce(
      (coordinates, coordinate) => {
        if (coordinate === '') return coordinates
        const keyAndRawValues = coordinate.split(' = (')
        return {
          ...coordinates,
          [keyAndRawValues[0]]: {
            L: keyAndRawValues[1].split(', ')[0],
            R: keyAndRawValues[1].split(', ')[1].substring(0,3),
          }
        }
      },
      {}
    )
    return { directions, coordinateMap }
  },
}

module.exports = hauntedWasteland
