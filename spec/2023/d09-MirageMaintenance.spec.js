// https://adventofcode.com/2023/day/9

const rawOasisData = '0 3 6 9 12 15\n1 3 6 10 15 21\n10 13 16 21 30 45'

const mirageMaintenance = require('../../lib/2023/d09-mirageMaintenance');

describe('mirageMaintenance', () => {
  describe('sumExtrapolatedValues', () => {
    it(`returns 114 when given \n"${rawOasisData}"`, () => {
      expect(mirageMaintenance.sumExtrapolatedValues(rawOasisData)).toBe(114);
    });
    it(`returns 114 when given \n"${rawOasisData + '\n'}"`, () => {
      expect(mirageMaintenance.sumExtrapolatedValues(rawOasisData + "\n")).toBe(114);
    });
  });
  describe('sumBackExtrapolatedValues', () => {
    it(`returns 2 when looking backwards given \n"${rawOasisData}"`, () => {
      expect(mirageMaintenance.sumBackExtrapolatedValues(rawOasisData)).toBe(2);
    });
    it(`returns 2 when looking backwards given \n"${rawOasisData + '\n'}"`, () => {
      expect(mirageMaintenance.sumBackExtrapolatedValues(rawOasisData + "\n")).toBe(2);
    });
  });

  describe('support functions', () => {
    describe('generateSequences', () => {
      it('can return sequences from a single row of oasis data', () => {
        const rowOfOasisData = [0, 3, 6, 9, 12, 15]
        expect(
          mirageMaintenance.generateSequences(rowOfOasisData)
        ).toEqual([
          [0, 3, 6, 9, 12, 15, 18],
          [3, 3, 3, 3, 3, 3],
          [0, 0, 0, 0, 0]
        ])
      })
    })
    describe('generateBackSequences', () => {
      it('can return sequences from a single row of oasis data', () => {
        const rowOfOasisData = [10, 13, 16, 21, 30, 45]
        expect(
          mirageMaintenance.generateBackSequences(rowOfOasisData)
        ).toEqual([
          [5, 10, 13, 16, 21, 30, 45],
          [5, 3, 3, 5, 9, 15],
          [-2, 0, 2, 4, 6],
          [2, 2, 2, 2],
          [0, 0, 0],
        ])
      })
    })
  })
});
