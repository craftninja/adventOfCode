// https://adventofcode.com/2023/day/5

const rawAlmanac = "seeds: 79 14 55 13\n\nseed-to-soil map:\n50 98 2\n52 50 48\n\nsoil-to-fertilizer map:\n0 15 37\n37 52 2\n39 0 15\n\nfertilizer-to-water map:\n49 53 8\n0 11 42\n42 0 7\n57 7 4\n\nwater-to-light map:\n88 18 7\n18 25 70\n\nlight-to-temperature map:\n45 77 23\n81 45 19\n68 64 13\n\ntemperature-to-humidity map:\n0 69 1\n1 0 69\n\nhumidity-to-location map:\n60 56 37\n56 93 4"

const ifYouGiveASeedAFertilizer = require('../../lib/2023/d05-ifYouGiveASeedAFertilizer');

describe('ifYouGiveASeedAFertilizer', () => {
  describe('closestLocationOfSeedSite2', () => {
    it(`returns 46 when given \n"${rawAlmanac}"`, () => {
      expect(ifYouGiveASeedAFertilizer.closestLocationOfSeedSite2(rawAlmanac)).toBe(46);
    });
    it(`returns 46 when given \n"${rawAlmanac}\n"`, () => {
      expect(ifYouGiveASeedAFertilizer.closestLocationOfSeedSite2(rawAlmanac + "\n")).toBe(46);
    });
  })

  describe('support functions', () => {
    describe('processAlmanac2', () => {
      it('can create almanac object from raw almanac data', () => {
        expect(
          ifYouGiveASeedAFertilizer.processAlmanac2(rawAlmanac)
        ).toEqual({
          seeds: [
            {start: 79, rangeLength: 14},
            {start: 55, rangeLength: 13},
          ],
          seedToSoilMap: [
            { destination: 50, source: 98, rangeLength: 2},
            { destination: 52, source: 50, rangeLength: 48},
          ],
          soilToFertilizerMap: [
            { destination: 0, source: 15, rangeLength: 37},
            { destination: 37, source: 52, rangeLength: 2},
            { destination: 39, source: 0, rangeLength: 15},
          ],
          fertilizerToWaterMap: [
            { destination: 49, source: 53, rangeLength: 8},
            { destination: 0, source: 11, rangeLength: 42},
            { destination: 42, source: 0, rangeLength: 7},
            { destination: 57, source: 7, rangeLength: 4},
          ],
          waterToLightMap: [
            { destination: 88, source: 18, rangeLength: 7},
            { destination: 18, source: 25, rangeLength: 70},
          ],
          lightToTempMap: [
            { destination: 45, source: 77, rangeLength: 23},
            { destination: 81, source: 45, rangeLength: 19},
            { destination: 68, source: 64, rangeLength: 13},
          ],
          tempToHumidityMap: [
            { destination: 0, source: 69, rangeLength: 1},
            { destination: 1, source: 0, rangeLength: 69},
          ],
          humidityToLocationMap: [
            { destination: 60, source: 56, rangeLength: 37},
            { destination: 56, source: 93, rangeLength: 4},
          ],
        })
      })
    })
  })
});
