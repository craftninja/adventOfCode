const pipeMaze = {
  furthestDistance: (rawMaze) => {
    return pipeMaze.generateLoop(rawMaze).length / 2
  },
  generateLoop: (rawMaze) => {
    const mazeCoords = rawMaze.split('\n')
    .filter(row => row != '')
    .map(row => row.split(''))

    const maxCoords = [mazeCoords.length - 1, mazeCoords[0].length - 1]

    const sRowIndex = mazeCoords.findIndex(row => row.includes('S'))
    const sCoords = [
      sRowIndex,
      mazeCoords[sRowIndex].indexOf('S')
    ]
    let completeLoop
    const entryToExit = {
      N: {
        '|': 'N',
        '7': 'W',
        'F': 'E',
      },
      E: {
        '-': 'E',
        'J': 'N',
        '7': 'S',
      },
      S: {
        '|': 'S',
        'L': 'E',
        'J': 'W',
      },
      W: {
        '-': 'W',
        'L': 'N',
        'F': 'S',
      },
    }

    let paths = {
      N: Object.keys(entryToExit['N']).includes(
        mazeCoords[[sCoords[0] - 1]][sCoords[1]]
      ) ? {
        direction: 'N',
        pathCoords: [sCoords, pipeMaze.getNextCoord(sCoords, 'N', maxCoords)]
      } : null,
      E: Object.keys(entryToExit['E']).includes(
        mazeCoords[[sCoords[0]]][sCoords[1]+1]
      ) ? {
        direction: 'E',
        pathCoords: [sCoords, pipeMaze.getNextCoord(sCoords, 'E', maxCoords)]
      } : null,
      S: Object.keys(entryToExit['S']).includes(
        mazeCoords[[sCoords[0] + 1]][sCoords[1]]
      ) ? {
        direction: 'S',
        pathCoords: [sCoords, pipeMaze.getNextCoord(sCoords, 'S', maxCoords)]
      } : null,
      W: Object.keys(entryToExit['W']).includes(
        mazeCoords[[sCoords[0]]][sCoords[1] - 1]
      ) ? {
        direction: 'W',
        pathCoords: [sCoords, pipeMaze.getNextCoord(sCoords, 'W', maxCoords)]
      } : null,
    }

    while (!completeLoop) {
      Object.keys(paths).forEach((direction, i) => {
        if (paths[direction] === null) {
          delete paths[direction]
        }
      });
      const pathsToCheck = Object.keys(paths)
      pathsToCheck.forEach((startingDirection) => {
        if (completeLoop) {
          paths[startingDirection] = null
          return
        }
        const pathCoords = paths[startingDirection].pathCoords
        const lastCooorInPath = pathCoords[pathCoords.length - 1]
        const direction = paths[startingDirection].direction
        const nextCoord = pipeMaze.getNextCoord(lastCooorInPath, direction, maxCoords)
        const nextIcon = mazeCoords[nextCoord[0]][nextCoord[1]]
        const nextIconValid = Object.keys(entryToExit[direction]).includes(nextIcon) || nextIcon === 'S'
        const nextDirection = entryToExit[direction][nextIcon]

        if (nextIconValid) {
          if (nextCoord[0] === pathCoords[0][0] && nextCoord[1] === pathCoords[0][1]) {
            completeLoop = paths[startingDirection].pathCoords
          } else {
            paths[startingDirection].direction = nextDirection
            paths[startingDirection].pathCoords.push(nextCoord)
          }
        } else {
          paths.startingDirection = null
        }
      });
    }
    return completeLoop
  },
  getNextCoord: (currentCoords, direction, maxCoords) => {
    if (direction === 'N' && currentCoords[0] > 0) {
      return [currentCoords[0] - 1, currentCoords[1]]
    } else if (direction === 'E' && currentCoords[1] < maxCoords[1]) {
      return [currentCoords[0], currentCoords[1] + 1]
    } else if (direction === 'S' && currentCoords[0] < maxCoords[0]) {
      return [currentCoords[0] + 1, currentCoords[1]]
    } else if (direction === 'W' && currentCoords[1] > 0) {
      return [currentCoords[0], currentCoords[1] - 1]
    } else {
      return null
    }
  },
}

module.exports = pipeMaze
