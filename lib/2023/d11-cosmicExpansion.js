const cosmicExpansion = {
  sumOfShortestPathsBetweenAllGalaxies: (rawMap) => {
    return cosmicExpansion.sumArrayOfArrays(
      cosmicExpansion.getGalaxyDistances(
        cosmicExpansion.getGalaxyCoordinates(
          cosmicExpansion.expandUniverse(
            cosmicExpansion.parseMap(rawMap)
          )
        )
      )
    )
  },
  sumOfShortestPathsBetweenAllGalaxies2: (rawMap, expansionNumber) => {
    return cosmicExpansion.sumArrayOfArrays(
      cosmicExpansion.getGalaxyDistances(
        cosmicExpansion.getExpandedGalaxyCoordinates(
          cosmicExpansion.parseMap(rawMap), expansionNumber
        )
      )
    )
  },
  parseMap: (rawMap) => {
    return rawMap.split('\n').
    filter(row => row !== '')
    .map(row => row.split(''))
  },
  getColumnsWithExpansion: (cosmicMap) => {
    let columnsWithExpansion = []
    for (let i = cosmicMap[0].length - 1; i >= 0; i--) {
      const column = cosmicMap.map(row => row[i]);
      if (column.every(space => space === '.')) {
        columnsWithExpansion.push(i)
      }
    }
    return columnsWithExpansion
  },
  getRowsWithExpansion: (cosmicMap) => {
    let rowsWithExpansion = []
    cosmicMap.forEach((row, i) => {
      if (row.every(space => space === '.')) {
        rowsWithExpansion.unshift(i)
      }
    });
    return rowsWithExpansion
  },
  expandUniverse: (cosmicMap) => {
    let expandedMap = cosmicMap.map(row => [...row])

    const columnsWithExpansion = cosmicExpansion.getColumnsWithExpansion(cosmicMap)

    columnsWithExpansion.forEach((column, extraNums) => {
      expandedMap = expandedMap.map((row, i) => {
        return [
          ...row.slice(0, column),
          '.',
          ...row.slice(column)
        ]
      })
    });

    const rowsWithExpansion = cosmicExpansion.getRowsWithExpansion(cosmicMap)

    rowsWithExpansion.forEach((row, i) => {
      expandedMap = [
        ...expandedMap.slice(0, row),
        [...expandedMap[row]],
        ...expandedMap.slice(row)
      ]
    });

    return expandedMap
  },
  getGalaxyCoordinates: (cosmicMap) => {
    let galaxyCoordinates = []
    cosmicMap.forEach((row, rowI) => {
      row.forEach((space, columnI) => {
        if (space === '#') {
          galaxyCoordinates.push([rowI, columnI])
        }
      });
    });
    return galaxyCoordinates
  },
  getExpandedGalaxyCoordinates: (cosmicMap, expansionNumber) => {
    let preExpansionGalaxyCoordinates = []
    cosmicMap.forEach((row, rowI) => {
      row.forEach((space, columnI) => {
        if (space === '#') {
          preExpansionGalaxyCoordinates.push([rowI, columnI])
        }
      });
    });
    const columnsWithExpansion = cosmicExpansion.getColumnsWithExpansion(cosmicMap)
    const rowsWithExpansion = cosmicExpansion.getRowsWithExpansion(cosmicMap)

    const galaxyCoordinates = preExpansionGalaxyCoordinates.map(coordinate => {
      const numberOfRowExpansions = rowsWithExpansion.filter(rowNum => {
        return coordinate[0] > rowNum
      }).length
      const numberOfColumnExpansions = columnsWithExpansion.filter(columnNum => {
        return coordinate[1] > columnNum
      }).length

      return [
        coordinate[0] + numberOfRowExpansions * ( expansionNumber - 1),
        coordinate[1] + numberOfColumnExpansions * ( expansionNumber - 1),
      ]
    })

    return galaxyCoordinates
  },
  getGalaxyDistances: (galaxyCoordinates) => {
    const allDistances =  galaxyCoordinates.map((coordinates, galaxyNum) => {
      let distances = []
      for (let i = galaxyNum + 1; i < galaxyCoordinates.length; i++) {
        distances.push(
          Math.abs(coordinates[0] - galaxyCoordinates[i][0]) +
          Math.abs(coordinates[1] - galaxyCoordinates[i][1])
        )
      }
      return distances
    }).filter(distances => distances.length > 0)
    return allDistances
  },
  sumArrayOfArrays: (arrayOfArrays) => {
    return arrayOfArrays.flat()
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = cosmicExpansion
