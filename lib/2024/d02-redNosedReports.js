const redNosedReports = {
  numberOfSafeReports: (rawLevelReports) => {
    return redNosedReports.getSafeReports(
      redNosedReports.parsedLists(rawLevelReports)
    ).length
  },
  numberOfSafeReportsWithProbDamp: (rawLevelReports) => {
    return redNosedReports.getSafeReportsWithProbDamp(
      redNosedReports.parsedLists(rawLevelReports)
    ).length
  },
  parsedLists: (rawLevelReports) => {
    return rawLevelReports.split('\n')
    .filter(row => row !== '')
    .map(row => {
      return row.split(' ').map(num => Number(num))
    })
  },
  getSafeReports: (levelReports) => {
    return levelReports.filter(redNosedReports.isSafe)
  },
  getSafeReportsWithProbDamp: (levelReports) => {
    return levelReports.filter(redNosedReports.isSafeWithDamp)
  },
  isSafeWithDamp: (levelReport) => {
    for (let i = 0; i < levelReport.length; i++) {
      if (redNosedReports.isSafe([
        ...levelReport.slice(0, i),
        ...levelReport.slice(i + 1, levelReport.length + 1)
      ])) {
        return true
      }
    }
    return false
  },
  isSafe: (levelReport) => {
    const isDescending = levelReport[0] > levelReport[1]
    return levelReport.every((level, i) => {
      if (i === 0) {
        return true
      }
      const diff = Math.abs(levelReport[i-1] - level)
      return levelReport[i-1] > level === isDescending && (
        diff === 1 ||
        diff === 2 ||
        diff === 3
      )
    })
  }
}

module.exports = redNosedReports
