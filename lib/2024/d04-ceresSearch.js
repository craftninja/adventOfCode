const ceresSearch = {
  countXmas: (rawCrossword) => {
    return ceresSearch.findXmases(
      ceresSearch.parseCrossword(rawCrossword)
    )
  },
  parseCrossword: (rawCrossword) => {
    return rawCrossword.split('\n')
  },
  findXmases: (crosswordLines) => {
    let xmasCount = 0
    crosswordLines.forEach((line, lineNumber) => {
      const xLineLocations = [...line.matchAll('X')].map(match => match.index)
      let n, ne, e, se, s, sw, w, nw
      xLineLocations.forEach((location) => {
        n = lineNumber >= 3 ?
          "".concat(
            crosswordLines[lineNumber][location],
            crosswordLines[lineNumber-1][location],
            crosswordLines[lineNumber-2][location],
            crosswordLines[lineNumber-3][location],
          ) : ""
        ne = lineNumber >= 3 ?
          "".concat(
            crosswordLines[lineNumber][location],
            crosswordLines[lineNumber-1][location+1],
            crosswordLines[lineNumber-2][location+2],
            crosswordLines[lineNumber-3][location+3],
          ) : ""
        e = "".concat(
          crosswordLines[lineNumber][location],
          crosswordLines[lineNumber][location+1],
          crosswordLines[lineNumber][location+2],
          crosswordLines[lineNumber][location+3],
        )
        se = lineNumber < crosswordLines.length - 3 ?
          "".concat(
            crosswordLines[lineNumber][location],
            crosswordLines[lineNumber+1][location+1],
            crosswordLines[lineNumber+2][location+2],
            crosswordLines[lineNumber+3][location+3],
          ) : ""
        s = lineNumber < crosswordLines.length - 3 ?
          "".concat(
            crosswordLines[lineNumber][location],
            crosswordLines[lineNumber+1][location],
            crosswordLines[lineNumber+2][location],
            crosswordLines[lineNumber+3][location],
          ) : ""
        sw = lineNumber < crosswordLines.length - 3 ?
          "".concat(
            crosswordLines[lineNumber][location],
            crosswordLines[lineNumber+1][location-1],
            crosswordLines[lineNumber+2][location-2],
            crosswordLines[lineNumber+3][location-3],
          ) : ""
        w = "".concat(
          crosswordLines[lineNumber][location],
          crosswordLines[lineNumber][location-1],
          crosswordLines[lineNumber][location-2],
          crosswordLines[lineNumber][location-3],
        )
        nw = lineNumber >= 3 ?
          "".concat(
            crosswordLines[lineNumber][location],
            crosswordLines[lineNumber-1][location-1],
            crosswordLines[lineNumber-2][location-2],
            crosswordLines[lineNumber-3][location-3],
          ) : ""
        if (n === 'XMAS') {
          xmasCount += 1
        }
        if (ne === 'XMAS') {
          xmasCount += 1
        }
        if (e === 'XMAS') {
          xmasCount += 1
        }
        if (se === 'XMAS') {
          xmasCount += 1
        }
        if (s === 'XMAS') {
          xmasCount += 1
        }
        if (sw === 'XMAS') {
          xmasCount += 1
        }
        if (w === 'XMAS') {
          xmasCount += 1
        }
        if (nw === 'XMAS') {
          xmasCount += 1
        }
      });
    });
    return xmasCount
  },
}

module.exports = ceresSearch
