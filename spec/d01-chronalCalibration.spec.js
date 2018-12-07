// https://adventofcode.com/2018/day/1


const chronalCalibration = require('../lib/d01-chronalCalibration');

describe('chronalCalibration', () => {
  it('returns 1 when given "+1"', () => {
    expect(chronalCalibration("+1")).toBe(1);
  });
  it('returns -1 when given "+1\n-2"', () => {
    expect(chronalCalibration("+1\n-2")).toBe(-1);
  });
  it('returns 2 when given "+1\n-2\n+3"', () => {
    expect(chronalCalibration("+1\n-2\n+3")).toBe(2);
  });
  it('returns 3 when given "+1\n-2\n+3\n+1"', () => {
    expect(chronalCalibration("+1\n-2\n+3\n+1")).toBe(3);
  });
});
