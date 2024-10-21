// https://adventofcode.com/2023/day/1


const cubeConundrum = require('../../lib/2023/d02-cubeConundrum');

describe('cubeConundrum calculatePower', () => {
  describe('can handle one line and', () => {
    it('returns 48 when given "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"', () => {
      const gameRecord = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      expect(cubeConundrum.calculatePower(gameRecord)).toBe(48);
    });
    it('returns 12 when given "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"', () => {
      const gameRecord = "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
      expect(cubeConundrum.calculatePower(gameRecord)).toBe(12);
    });
    it('returns 1560 when given "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"', () => {
      const gameRecord = "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
      expect(cubeConundrum.calculatePower(gameRecord)).toBe(1560);
    });
    it('returns 630 when given "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"', () => {
      const gameRecord = "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red";
      expect(cubeConundrum.calculatePower(gameRecord)).toBe(630);
    });
    it('returns 36 when given "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"', () => {
      const gameRecord = "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
      expect(cubeConundrum.calculatePower(gameRecord)).toBe(36);
    });
  })

  describe('can handle multiple lines', () => {
    it('returns 2286 when given \n"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"', () => {
      const gameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
      expect(cubeConundrum.calculatePower(gameRecords)).toBe(2286);
    });
  })

  describe('can handle empty line at end of input', () => {
    it('returns 2286 when given \n"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"', () => {
      const gameRecords = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green\n";
      expect(cubeConundrum.calculatePower(gameRecords)).toBe(2286);
    });
  })
});

describe('support functions', () => {
  describe('getGameCubeCounts', () => {
    it('can calculate game powers from game records with single game', () => {
      const gameRecords = {
        '1': [
          { blue: 3, red: 4 },
          { red: 1, green: 2, blue: 6 },
          { green: 2 }
        ],
      }
      const gameCubeCounts = cubeConundrum.getGameCubeCounts(gameRecords)
      expect(Object.keys(gameCubeCounts)).toEqual(["1"])
      expect(gameCubeCounts["1"].red).toBe(4)
      expect(gameCubeCounts["1"].green).toBe(2)
      expect(gameCubeCounts["1"].blue).toBe(6)
    })
    it('can calculate game powers from game records with multiple games', () => {
      const gameRecords = {
        '1': [
          { blue: 3, red: 4 },
          { red: 1, green: 2, blue: 6 },
          { green: 2 }
        ],
        '2': [
          { blue: 1, green: 2 },
          { green: 3, blue: 4, red: 1 },
          { green: 1, blue: 1 }
        ],
        '3': [
          { green: 8, blue: 6, red: 20 },
          { blue : 5, red: 4, green: 13 },
          { green: 5, red: 1 },
        ],
        '4': [
          { green: 1, red: 3, blue: 6 },
          { green: 3, red: 6 },
          { green: 3, blue: 15, red: 14 },
        ],
        '5': [
          { red: 6, blue: 1, green: 3 },
          { blue: 2, red: 1, green: 2 },
        ],
      }

      const gameCubeCounts = cubeConundrum.getGameCubeCounts(gameRecords)
      expect(Object.keys(gameCubeCounts)).toEqual(["1", "2", "3", "4", "5"])
      expect(gameCubeCounts["1"].red).toBe(4)
      expect(gameCubeCounts["1"].green).toBe(2)
      expect(gameCubeCounts["1"].blue).toBe(6)
      expect(gameCubeCounts["2"].red).toBe(1)
      expect(gameCubeCounts["2"].green).toBe(3)
      expect(gameCubeCounts["2"].blue).toBe(4)
      expect(gameCubeCounts["3"].red).toBe(20)
      expect(gameCubeCounts["3"].green).toBe(13)
      expect(gameCubeCounts["3"].blue).toBe(6)
      expect(gameCubeCounts["4"].red).toBe(14)
      expect(gameCubeCounts["4"].green).toBe(3)
      expect(gameCubeCounts["4"].blue).toBe(15)
      expect(gameCubeCounts["5"].red).toBe(6)
      expect(gameCubeCounts["5"].green).toBe(3)
      expect(gameCubeCounts["5"].blue).toBe(2)
    })
  });
})
