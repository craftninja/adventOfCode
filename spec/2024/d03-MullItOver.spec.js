// https://adventofcode.com/2024/day/3

const rawCorruptedMemory = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

const mullItOver = require('../../lib/2024/d03-mullItOver');

describe('mullItOver', () => {
  describe('mulSumCorruptedMemory', () => {
    it(`returns 161 when given \n"${rawCorruptedMemory}"`, () => {
      expect(mullItOver.mulSumCorruptedMemory(rawCorruptedMemory)).toBe(161);
    });
    it(`returns 161 when given \n"${rawCorruptedMemory + '\n'}"`, () => {
      expect(mullItOver.mulSumCorruptedMemory(rawCorruptedMemory + "\n")).toBe(161);
    });
  });

  describe('support functions', () => {
    describe('parsedMulInstructions', () => {
      it('returns parsed mul instructions from a raw corrupted memory', () => {
        expect(
          mullItOver.parsedMulInstructions(rawCorruptedMemory)
        ).toEqual([
          [2, 4],
          [5, 5],
          [11, 8],
          [8, 5],
        ])
      })
    })
    describe('mulSumArray', () => {
      it('returns multiplied then summed array of arrays', () => {
        expect(
          mullItOver.mulSumArray([
            [2, 4],
            [5, 5],
            [11, 8],
            [8, 5],
          ])
        ).toEqual(161)
      })
    })
  })
});
