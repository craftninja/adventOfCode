// https://adventofcode.com/2020/day/1


const reportRepair = require('../../lib/2020/d01-reportRepair');

describe('reportRepair', () => {
  it('returns 0 when given "0\n2020"', () => {
    const report = "0\n2020";
    expect(reportRepair(report)).toBe(0);
  });
  it('returns 2019 when given "1\n2019"', () => {
    const report = "1\n2019";
    expect(reportRepair(report)).toBe(2019);
  });
  it('returns 6051 when given "2\n3\n2017"', () => {
    const report = "2\n3\n2017";
    expect(reportRepair(report)).toBe(6051);
  });
  it('returns 6051 when given "3\n2\n2017"', () => {
    const report = "3\n2\n2017";
    expect(reportRepair(report)).toBe(6051);
  });
  it('returns 514579 when given "1721\n979\n366\n299\n675\n1456"', () => {
    const report = "1721\n979\n366\n299\n675\n1456";
    expect(reportRepair(report)).toBe(514579);
  });
});
