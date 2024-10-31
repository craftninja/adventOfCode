const ifYouGiveASeedAFertilizer = {
  closestLocationOfSeedSite: (rawAlmanac) => {
    const processedAlmanac = ifYouGiveASeedAFertilizer.processAlmanac(rawAlmanac)
    const getMappedNumber = ifYouGiveASeedAFertilizer.getMappedNumber
    const seedLocations = processedAlmanac.seeds
    .map(seedNumber => {
      return getMappedNumber(
        seedNumber, processedAlmanac.seedToSoilMap
      )
    }).map(soilNumber => {
      return getMappedNumber(
        soilNumber, processedAlmanac.soilToFertilizerMap
      )
    }).map(fertilizerNumber => {
      return getMappedNumber(
        fertilizerNumber, processedAlmanac.fertilizerToWaterMap
      )
    }).map(waterNumber => {
      return getMappedNumber(
        waterNumber, processedAlmanac.waterToLightMap
      )
    }).map(lightNumber => {
      return getMappedNumber(
        lightNumber, processedAlmanac.lightToTempMap
      )
    }).map(tempNumber => {
      return getMappedNumber(
        tempNumber, processedAlmanac.tempToHumidityMap
      )
    }).map(humidityNumber => {
      return getMappedNumber(
        humidityNumber, processedAlmanac.humidityToLocationMap
      )
    })
    return Math.min(...seedLocations)
  },
  getMappedNumber: (num, mapList) => {
    const mapToUse = mapList.find(mapFragment => {
      return num >= mapFragment.source && num < mapFragment.source + mapFragment.rangeLength
    })

    if (!mapToUse) {
      return num
    }
    return mapToUse.destination + num - mapToUse.source
  },
  processAlmanac: (rawAlmanac) => {
    const seedsAndRest = rawAlmanac.split("\n\nseed-to-soil map:\n")
    const seeds = seedsAndRest[0].split("seeds: ")[1].split(" ").map(seed => Number(seed))

    const seedToSoilAndRest = seedsAndRest[1].split("\n\nsoil-to-fertilizer map:\n")
    const seedToSoilMap = ifYouGiveASeedAFertilizer.textMapIntoMap(seedToSoilAndRest[0])

    const soilToFertilizerAndRest = seedToSoilAndRest[1].split("\n\nfertilizer-to-water map:\n")
    const soilToFertilizerMap = ifYouGiveASeedAFertilizer.textMapIntoMap(soilToFertilizerAndRest[0])

    const fertilizerToWaterAndRest = soilToFertilizerAndRest[1].split("\n\nwater-to-light map:\n")
    const fertilizerToWaterMap = ifYouGiveASeedAFertilizer.textMapIntoMap(fertilizerToWaterAndRest[0])

    const waterToLightAndRest = fertilizerToWaterAndRest[1].split("\n\nlight-to-temperature map:\n")
    const waterToLightMap = ifYouGiveASeedAFertilizer.textMapIntoMap(waterToLightAndRest[0])

    const lightToTempAndRest = waterToLightAndRest[1].split("\n\ntemperature-to-humidity map:\n")
    const lightToTempMap = ifYouGiveASeedAFertilizer.textMapIntoMap(lightToTempAndRest[0])

    const tempToHumidityAndRest = lightToTempAndRest[1].split("\n\nhumidity-to-location map:\n")
    const tempToHumidityMap = ifYouGiveASeedAFertilizer.textMapIntoMap(tempToHumidityAndRest[0])

    const humidityToLocationMap = ifYouGiveASeedAFertilizer.textMapIntoMap(tempToHumidityAndRest[1])

    return {
      seeds,
      seedToSoilMap,
      soilToFertilizerMap,
      fertilizerToWaterMap,
      waterToLightMap,
      lightToTempMap,
      tempToHumidityMap,
      humidityToLocationMap
    }
  },
  textMapIntoMap: (textMap) => {
    return textMap.split("\n").map(mapFragment => {
      const [destination, source, rangeLength] = mapFragment.split(" ").map(piece => Number(piece))
      return {destination, source, rangeLength}
    })
  },
  sumArrayRemovingNaNs: (array) => {
    return array
    .filter(number => !isNaN(number))
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = ifYouGiveASeedAFertilizer