// https://adventofcode.com/2018/day/2


const inventoryManagementSystem = require('../../lib/2018/d02-inventoryManagementSystem');

describe('inventoryManagementSystem', () => {
  it('returns 0 when given "abcdef\n"', () => {
    expect(inventoryManagementSystem("abcdef\n")).toBe(0);
  });
  it('returns 1 when given "abcdef\nbababc\n"', () => {
    expect(inventoryManagementSystem("abcdef\nbababc\n")).toBe(1);
  });
  it('returns 2 when given "abcdef\nbababc\nabbcde\n"', () => {
    expect(inventoryManagementSystem("abcdef\nbababc\nabbcde\n")).toBe(2);
  });
  it('returns 12 when given "abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab"', () => {
    expect(inventoryManagementSystem("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab")).toBe(12);
  });
});
