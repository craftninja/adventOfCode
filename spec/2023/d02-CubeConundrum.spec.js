// https://adventofcode.com/2023/day/1


const cubeConundrum = require('../../lib/2023/d02-cubeConundrum');

describe('cubeConundrum', () => {
  describe('can handle one line', () => {
    it('returns 1 when given "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"', () => {
      const gameRecord = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      const bagContents = "12 red, 13 green, 14 blue"
      expect(cubeConundrum.calculateSum(bagContents, gameRecord)).toBe(1);
    });
  })

  describe('can handle multiple lines', () => {
    it('returns 8 when given "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"', () => {
      const gameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
      const bagContents = "12 red, 13 green, 14 blue"
      expect(cubeConundrum.calculateSum(bagContents, gameRecords)).toBe(8);
    });
  })

  describe('can handle empty line at end of input', () => {
    it('returns 8 when given "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"', () => {
      const gameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green\n";
      const bagContents = "12 red, 13 green, 14 blue"
      expect(cubeConundrum.calculateSum(bagContents, gameRecords)).toBe(8);
    });
  })
});

describe('support functions', () => {
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
  });
  describe('parseGameRecords', () => {
    it('can parse a game record "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"', () => {
      const rawGameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      const gameRecords = cubeConundrum.parseGameRecords(rawGameRecords);
      expect(gameRecords).toEqual({
        "1": [
          {"blue": 3, "red": 4},
          {"red": 1, "green": 2, "blue": 6},
          {"green": 2}
        ]
      })

    })
    it('can parse two game records "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"', () => {
      const rawGameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
      const gameRecords = cubeConundrum.parseGameRecords(rawGameRecords);
      expect(gameRecords).toEqual({
        "1": [
          {"blue": 3, "red": 4},
          {"red": 1, "green": 2, "blue": 6},
          {"green": 2},
        ],
        "2": [
          {"blue": 1, "green": 2},
          {"green": 3, "blue": 4, "red": 1},
          {"green": 1, "blue": 1},
        ]
      })

    })
    it('can parse two game records with trailing newline "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n"', () => {
      const rawGameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n";
      const gameRecords = cubeConundrum.parseGameRecords(rawGameRecords);
      expect(gameRecords).toEqual({
        "1": [
          {"blue": 3, "red": 4},
          {"red": 1, "green": 2, "blue": 6},
          {"green": 2},
        ],
        "2": [
          {"blue": 1, "green": 2},
          {"green": 3, "blue": 4, "red": 1},
          {"green": 1, "blue": 1},
        ]
      })

    })
  })
})
