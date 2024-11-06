// https://adventofcode.com/2023/day/6

const rawRaceResults = "Time:      7  15   30\nDistance:  9  40  200"

const waitForIt = require('../../lib/2023/d06-waitForIt');

describe('waitForIt', () => {
  describe('productOfNumberOfWaysToWinForEachRace', () => {
    it(`returns 288 when given \n"${rawRaceResults}"`, () => {
      expect(waitForIt.productOfNumberOfWaysToWinForEachRace(rawRaceResults)).toBe(288);
    });
    it(`returns 288 when given \n"${rawRaceResults + '\n'}"`, () => {
      expect(waitForIt.productOfNumberOfWaysToWinForEachRace(rawRaceResults + "\n")).toBe(288);
    });
  });
  describe('productOfNumberOfWaysToWinForEachRace2', () => {
    it(`returns 71503 when given \n"${rawRaceResults}"`, () => {
      expect(waitForIt.productOfNumberOfWaysToWinForEachRace2(rawRaceResults)).toBe(71503);
    });
    it(`returns 71503 when given \n"${rawRaceResults + '\n'}"`, () => {
      expect(waitForIt.productOfNumberOfWaysToWinForEachRace2(rawRaceResults + "\n")).toBe(71503);
    });
  })

  describe('support functions', () => {
    describe('raceResults', () => {
      it('can create race result object from raw race result data', () => {
        expect(
          waitForIt.raceResults(rawRaceResults)
        ).toEqual([
          { time: 7, distance: 9 },
          { time: 15, distance: 40 },
          { time: 30, distance: 200 },
        ])
      })
      it('returns error with unequal time and distance data', () => {
        expect(
          () => waitForIt.raceResults(rawRaceResults + "   400")
        ).toThrowError("Time and Distance data unequal")
      })
    })
    describe('raceResults2', () => {
      it('can create race result object from raw race result data', () => {
        expect(
          waitForIt.raceResults2(rawRaceResults)
        ).toEqual([
          { time: 71530, distance: 940200 },
        ])
      })
      it('returns error with unequal time and distance data', () => {
        expect(
          () => waitForIt.raceResults(rawRaceResults + "   400")
        ).toThrowError("Time and Distance data unequal")
      })
    })
    describe('waysToWin', () => {
      it('can create `ways to win` object from race result object', () => {
        const raceResults = [
          { time: 7, distance: 9 },
          { time: 15, distance: 40 },
          { time: 30, distance: 200 },
        ]
        expect(waitForIt.waysToWin(raceResults)).toEqual(
          [ 4, 8, 9 ]
        )
      })
    })
    describe('productOfArray', () => {
      it('gives the product of numbers in an array', () => {
        expect(waitForIt.productOfArray([ 4, 8, 9 ])).toEqual(288)
      })
    })
  })
});
