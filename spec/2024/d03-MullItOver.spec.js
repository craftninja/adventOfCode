// https://adventofcode.com/2024/day/3

const rawCorruptedMemory = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'
const rawCorruptedMemory2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
const rawCorruptedMemory3 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

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
  describe('mulSumCorruptedMemoryFollowingInstructions', () => {
    it(`returns 48 when given \n"${rawCorruptedMemory2}"`, () => {
      expect(mullItOver.mulSumCorruptedMemoryFollowingInstructions(rawCorruptedMemory2)).toBe(48);
    });
    it(`returns 48 when given \n"${rawCorruptedMemory2 + '\n'}"`, () => {
      expect(mullItOver.mulSumCorruptedMemoryFollowingInstructions(rawCorruptedMemory2 + "\n")).toBe(48);
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
    describe('parsedMulFollowingInstructions', () => {
      it('returns parsed mul instructions from a raw corrupted memory', () => {
        expect(
          mullItOver.parsedMulFollowingInstructions(rawCorruptedMemory2)
        ).toEqual([
          [2, 4],
          [8, 5],
        ])
      })
    })
    describe('parsedMulFollowingInstructions', () => {
      it('returns parsed mul instructions (2x) from a raw corrupted memory', () => {
        expect(
          mullItOver.parsedMulFollowingInstructions(rawCorruptedMemory3)
        ).toEqual([
          [2, 4],
          [8, 5],
          [2, 4],
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
