// https://adventofcode.com/2023/day/1


const trebuchet = require('../../lib/2023/d01-trebuchet');

describe('trebuchet', () => {
  describe('can handle one line', () => {
    it('returns 12 when given "1abc2"', () => {
      const report = "1abc2";
      expect(trebuchet(report)).toBe(12);
    });
    it('returns 38 when given "pqr3stu8vwx"', () => {
      const report = "pqr3stu8vwx";
      expect(trebuchet(report)).toBe(38);
    });
    it('returns 15 when given "a1b2c3d4e5f"', () => {
      const report = "a1b2c3d4e5f";
      expect(trebuchet(report)).toBe(15);
    });
    it('returns 77 when given "treb7uchet"', () => {
      const report = "treb7uchet";
      expect(trebuchet(report)).toBe(77);
    });
  })

  describe('can handle multiple lines', () => {
    xit('returns 50 when given "1abc2\npqr3stu8vwx"', () => {
      const report = "1abc2\npqr3stu8vwx";
      expect(trebuchet(report)).toBe(50);
    });
    xit('returns 65 when given "1abc2\npqr3stu8vwx\na1b2c3d4e5f"', () => {
      const report = "1abc2\npqr3stu8vwx\na1b2c3d4e5f";
      expect(trebuchet(report)).toBe(65);
    });
    xit('returns 142 when given "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet"', () => {
      const report = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
      expect(trebuchet(report)).toBe(142);
    });
  })
});
