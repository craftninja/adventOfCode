// https://adventofcode.com/2023/day/1


const trebuchet = require('../../lib/2023/d01-trebuchet');

describe('trebuchet', () => {
  describe('can handle one line', () => {
    it('returns 12 when given "1abc2"', () => {
      const messedCalibrationValue = "1abc2";
      expect(trebuchet(messedCalibrationValue)).toBe(12);
    });
    it('returns 38 when given "pqr3stu8vwx"', () => {
      const messedCalibrationValue = "pqr3stu8vwx";
      expect(trebuchet(messedCalibrationValue)).toBe(38);
    });
    it('returns 15 when given "a1b2c3d4e5f"', () => {
      const messedCalibrationValue = "a1b2c3d4e5f";
      expect(trebuchet(messedCalibrationValue)).toBe(15);
    });
    it('returns 77 when given "treb7uchet"', () => {
      const messedCalibrationValue = "treb7uchet";
      expect(trebuchet(messedCalibrationValue)).toBe(77);
    });
  })

  describe('can handle multiple lines', () => {
    it('returns 50 when given "1abc2\npqr3stu8vwx"', () => {
      const messedCalibrationValues = "1abc2\npqr3stu8vwx";
      expect(trebuchet(messedCalibrationValues)).toBe(50);
    });
    it('returns 65 when given "1abc2\npqr3stu8vwx\na1b2c3d4e5f"', () => {
      const messedCalibrationValues = "1abc2\npqr3stu8vwx\na1b2c3d4e5f";
      expect(trebuchet(messedCalibrationValues)).toBe(65);
    });
    it('returns 142 when given "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet"', () => {
      const messedCalibrationValues = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
      expect(trebuchet(messedCalibrationValues)).toBe(142);
    });
  })

  describe('can handle empty line at end of input', () => {
    it('returns 142 when given "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet\n"', () => {
      const messedCalibrationValues = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet\n";
      expect(trebuchet(messedCalibrationValues)).toBe(142);
    })
  })
});
