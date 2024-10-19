// https://adventofcode.com/2023/day/1


const trebuchet2 = require('../../lib/2023/d01-trebuchet2');

describe('trebuchet2', () => {
  describe('can handle one line', () => {
    it('returns 29 when given "two1nine"', () => {
      const messedCalibrationValue = "two1nine";
      expect(trebuchet2(messedCalibrationValue)).toBe(29);
    });
    it('returns 83 when given "eightwothree"', () => {
      const messedCalibrationValue = "eightwothree";
      expect(trebuchet2(messedCalibrationValue)).toBe(83);
    });
    it('returns 13 when given "abcone2threexyz"', () => {
      const messedCalibrationValue = "abcone2threexyz";
      expect(trebuchet2(messedCalibrationValue)).toBe(13);
    });
    it('returns 24 when given "xtwone3four"', () => {
      const messedCalibrationValue = "xtwone3four";
      expect(trebuchet2(messedCalibrationValue)).toBe(24);
    });
    it('returns 42 when given "4nineeightseven2"', () => {
      const messedCalibrationValue = "4nineeightseven2";
      expect(trebuchet2(messedCalibrationValue)).toBe(42);
    });
    it('returns 14 when given "zoneight234"', () => {
      const messedCalibrationValue = "zoneight234";
      expect(trebuchet2(messedCalibrationValue)).toBe(14);
    });
    it('returns 76 when given "7pqrstsixteen"', () => {
      const messedCalibrationValue = "7pqrstsixteen";
      expect(trebuchet2(messedCalibrationValue)).toBe(76);
    });
    it('returns 58 when given "fiveight"', () => {
      const messedCalibrationValue = "fiveight";
      expect(trebuchet2(messedCalibrationValue)).toBe(58);
    });
    it('returns 67 when given "six23seven"', () => {
      const messedCalibrationValue = "six23seven";
      expect(trebuchet2(messedCalibrationValue)).toBe(67);
    });
  })

  describe('can handle multiple lines', () => {
    it('returns 281 when given "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen"', () => {
      const messedCalibrationValues = "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen";
      expect(trebuchet2(messedCalibrationValues)).toBe(281);
    });
  })

  describe('can handle empty line at end of input', () => {
    it('returns 281 when given "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen\n"', () => {
      const messedCalibrationValues = "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen\n";
      expect(trebuchet2(messedCalibrationValues)).toBe(281);
    })
  })
});
