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
}
