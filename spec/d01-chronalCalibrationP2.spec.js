// https://adventofcode.com/2018/day/1


const chronalCalibration = require('../lib/d01-chronalCalibrationP2');

describe('chronalCalibration', () => {
  it('returns 2 when given "+1\n-2\n+3\n+1"', () => {
    expect(chronalCalibration("+1\n-2\n+3\n+1")).toBe(2);
  });
  it('returns 0 when given "+1\n-1"', () => {
    expect(chronalCalibration("+1\n-1")).toBe(0);
  });
  it('returns 10 when given "+3\n+3\n+4\n-2\n-4"', () => {
    expect(chronalCalibration("+3\n+3\n+4\n-2\n-4")).toBe(10);
  });
  it('returns 5 when given "-6\n+3\n+8\n+5\n-6"', () => {
    expect(chronalCalibration("-6\n+3\n+8\n+5\n-6")).toBe(5);
  });
  it('returns 14 when given "+7\n+7\n-2\n-7\n-4"', () => {
    expect(chronalCalibration("+7\n+7\n-2\n-7\n-4")).toBe(14);
  });
});
