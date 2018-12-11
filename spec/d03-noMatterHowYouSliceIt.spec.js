// https://adventofcode.com/2018/day/3


const cuttingDeficits = require('../lib/d03-noMatterHowYouSliceIt');

describe('cuttingDeficits', () => {
  it('returns 0 when given "#1 @ 1,3: 4x4"', () => {
    const cuttingOrders = "#1 @ 1,3: 4x4";
    expect(cuttingDeficits(cuttingOrders)).toBe(0);
  });
  it('returns 4 when given "#1 @ 1,3: 4x4\n #2 @ 3,1: 4x4\n #3 @ 5,5: 2x2\n"', () => {
    const cuttingOrders = "#1 @ 1,3: 4x4\n #2 @ 3,1: 4x4\n #3 @ 5,5: 2x2\n";
    expect(cuttingDeficits(cuttingOrders)).toBe(4);
  });
});
