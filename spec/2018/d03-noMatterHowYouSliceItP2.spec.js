// https://adventofcode.com/2018/day/3


const noOverlaps = require('../../lib/2018/d03-noMatterHowYouSliceItP2');

describe('noOverlaps', () => {
  it('returns undefined when given "#1 @ 1,3: 4x4\n#2 @ 1,3: 4x4"', () => {
    const cuttingOrders = "#1 @ 1,3: 4x4\n#2 @ 1,3: 4x4";
    expect(noOverlaps(cuttingOrders)).toBe(undefined);
  });
  it('returns 3 when given "#1 @ 1,3: 4x4\n#2 @ 1,3: 4x4\n#3 @ 10,3: 4x4"', () => {
    const cuttingOrders = "#1 @ 1,3: 4x4\n#2 @ 1,3: 4x4\n#3 @ 10,3: 4x4";
    expect(noOverlaps(cuttingOrders)).toBe(3);
  });
});
