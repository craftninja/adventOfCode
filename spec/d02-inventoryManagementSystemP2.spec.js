// https://adventofcode.com/2018/day/2


const inventoryManagementSystem = require('../lib/d02-inventoryManagementSystemP2');

describe('inventoryManagementSystem', () => {
  it('returns "fgij" when given "abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxy\n"', () => {
    const boxIds = "abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxy\n"
    expect(inventoryManagementSystem(boxIds)).toBe('fgij');
  });
});
