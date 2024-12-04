// https://adventofcode.com/2024/day/1

const rawLocationIDlist = '3   4\n4   3\n2   5\n1   3\n3   9\n3   3'

const historianHysteria = require('../../lib/2024/d01-historianHysteria');

describe('historianHysteria', () => {
  describe('sumOfOrderedDifferences', () => {
    it(`returns 11 when given \n"${rawLocationIDlist}"`, () => {
      expect(historianHysteria.sumOfOrderedDifferences(rawLocationIDlist)).toBe(11);
    });
    it(`returns 11 when given \n"${rawLocationIDlist + '\n'}"`, () => {
      expect(historianHysteria.sumOfOrderedDifferences(rawLocationIDlist + "\n")).toBe(11);
    });
  });

  describe('support functions', () => {
    describe('orderedParsedLists', () => {
      it('returns parsed lists from a raw records', () => {
        expect(
          historianHysteria.orderedParsedLists(rawLocationIDlist)
        ).toEqual([
          [1, 2, 3, 3, 3, 4],
          [3, 3, 3, 4, 5, 9],
        ])
      })
    })
    describe('getDiffs', () => {
      it('returns list of diffs from list pair', () => {
        expect(
          historianHysteria.getDiffs([
            [1, 2, 3, 3, 3, 4],
            [3, 3, 3, 4, 5, 9],
          ])
        ).toEqual([2, 1, 0, 1, 2, 5])
      })
      it('returns list of absolute values of diffs from list pair', () => {
        expect(
          historianHysteria.getDiffs([
            [1, 2, 3, 3, 3, 9],
            [3, 3, 3, 4, 5, 5],
          ])
        ).toEqual([2, 1, 0, 1, 2, 4])
      })
    })
    describe('sumArray', () => {
      it('returns sum of all numbers in an array', () => {
        expect(
          historianHysteria.sumArray([2, 1, 0, 1, 2, 5])
        ).toEqual(11)
      })
    })
  })
});
