// https://adventofcode.com/2018/day/2


const offByOne = require('../../lib/2018/offByOne');

describe('offByOne', () => {
  it('returns true when given "abcde" and "abdde"', () => {
    const boxId1 = "abcde"
    const boxId2 = "abdde"
    expect(offByOne(boxId1, boxId2)).toBe(true);
  });
  it('returns false when given "abcde" and "abcde"', () => {
    const boxId1 = "abcde"
    const boxId2 = "abcde"
    expect(offByOne(boxId1, boxId2)).toBe(false);
  });
  it('returns false when given "abcde" and "vwxyz"', () => {
    const boxId1 = "abcde"
    const boxId2 = "vwxyz"
    expect(offByOne(boxId1, boxId2)).toBe(false);
  });
});
