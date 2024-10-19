// https://adventofcode.com/2023/day/1


const cubeConundrum = require('../../lib/2023/d02-cubeConundrum');

describe('support function', () => {
  describe('parseCubeSet', () => {
    it('can parse a list of colored cubes "12 red, 13 green, 14 blue"', () => {
      const rawBagContents = "12 red, 13 green, 14 blue"
      const bagContents = cubeConundrum.parseCubeSet(rawBagContents)
      expect(Object.keys(bagContents)).toEqual(["red", "green", "blue"])
      expect(bagContents.red).toBe(12)
      expect(bagContents.green).toBe(13)
      expect(bagContents.blue).toBe(14)
    })
    it('can parse a list of colored cubes "3 blue, 4 red"', () => {
      const rawBagContents = "3 blue, 4 red"
      const bagContents = cubeConundrum.parseCubeSet(rawBagContents)
      expect(Object.keys(bagContents)).toEqual(["blue", "red"])
      expect(bagContents.red).toBe(4)
      expect(bagContents.blue).toBe(3)
    })
  })
})
