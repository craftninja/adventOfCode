// https://adventofcode.com/2024/day/2

const rawLevelReports = '7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9'

const redNosedReports = require('../../lib/2024/d02-redNosedReports');

describe('redNosedReports', () => {
  describe('numberOfSafeReports', () => {
    it(`returns 2 when given \n"${rawLevelReports}"`, () => {
      expect(redNosedReports.numberOfSafeReports(rawLevelReports)).toBe(2);
    });
    it(`returns 2 when given \n"${rawLevelReports + '\n'}"`, () => {
      expect(redNosedReports.numberOfSafeReports(rawLevelReports + "\n")).toBe(2);
    });
  });

  describe('support functions', () => {
    describe('parsedLists', () => {
      it('returns parsed lists from a raw level report', () => {
        expect(
          redNosedReports.parsedLists(rawLevelReports)
        ).toEqual([
          [7, 6, 4, 2, 1],
          [1, 2, 7, 8, 9],
          [9, 7, 6, 2, 1],
          [1, 3, 2, 4, 5],
          [8, 6, 4, 4, 1],
          [1, 3, 6, 7, 9],
        ])
      })
    })
    describe('getSafeReports', () => {
      it('returns list of diffs from list pair', () => {
        expect(
          redNosedReports.getSafeReports([
            [7, 6, 4, 2, 1],
            [1, 2, 7, 8, 9],
            [9, 7, 6, 2, 1],
            [1, 3, 2, 4, 5],
            [8, 6, 4, 4, 1],
            [1, 3, 6, 7, 9],
          ])
        ).toEqual([
          [7, 6, 4, 2, 1],
          [1, 3, 6, 7, 9],
        ])
      })
    })
  })
});
