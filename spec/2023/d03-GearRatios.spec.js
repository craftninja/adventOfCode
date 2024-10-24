// https://adventofcode.com/2023/day/3


const gearRatios = require('../../lib/2023/d03-gearRatios');

describe('gearRatios sumPartNumbersFromSchematic', () => {
  describe('can handle one line and', () => {
    it('returns 0 when given "467..114.."', () => {
      const engineSchematic = "467..114..";
      expect(gearRatios.sumPartNumbersFromSchematic(engineSchematic)).toBe(0);
    });
    it('returns 617 when given "617*......"', () => {
      const engineSchematic = "617*......";
      expect(gearRatios.sumPartNumbersFromSchematic(engineSchematic)).toBe(617);
    });
    it('returns 617 when given "......*617"', () => {
      const engineSchematic = "......*617";
      expect(gearRatios.sumPartNumbersFromSchematic(engineSchematic)).toBe(617);
    });
  })

  xdescribe('can handle multiple lines', () => {
    it('returns 4361 when given \n"467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598.."', () => {
      const engineSchematic = "467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..";
      expect(gearRatios.sumPartNumbersFromSchematic(engineSchematic)).toBe(4361);
    });
  })

  xdescribe('can handle empty line at end of input', () => {
    it('returns 4361 when given \n"467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598.."', () => {
      const engineSchematic = "467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..\n";
      expect(gearRatios.sumPartNumbersFromSchematic(engineSchematic)).toBe(4361);
    });
  })
});
