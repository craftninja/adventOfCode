// https://adventofcode.com/2020/day/1


const reportRepair2 = require('../../lib/2020/d01-reportRepair2');

describe('reportRepair2', () => {
  it('returns 2018 when given "1\n1\n2018"', () => {
    const report = "1\n1\n2018";
    expect(reportRepair2(report)).toBe(2018);
  });
  it('returns 12090 when given "2\n3\n2015"', () => {
    const report = "2\n3\n2015";
    expect(reportRepair2(report)).toBe(12090);
  });
  it('returns 12090 when given "3\n3\n2\n2015"', () => {
    const report = "3\n3\n2\n2015";
    expect(reportRepair2(report)).toBe(12090);
  });
  it('returns 241861950 when given "1721\n979\n366\n299\n675\n1456"', () => {
    const report = "1721\n979\n366\n299\n675\n1456";
    expect(reportRepair2(report)).toBe(241861950);
  });
});
