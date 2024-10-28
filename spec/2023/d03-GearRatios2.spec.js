// https://adventofcode.com/2023/day/3


const gearRatios = require('../../lib/2023/d03-gearRatios');

describe('gearRatios sumGearRatiosFromSchematic', () => {
  describe('can handle one line and', () => {
    it('returns 0 when given "467..114.."', () => {
      const engineSchematic = "467..114..";
      expect(gearRatios.sumGearRatiosFromSchematic(engineSchematic)).toBe(0);
    });
    it('returns 0 when given "617*......"', () => {
      const engineSchematic = "617*......";
      expect(gearRatios.sumGearRatiosFromSchematic(engineSchematic)).toBe(0);
    });
    it('returns 617 when given "......1*617"', () => {
      const engineSchematic = "......1*617";
      expect(gearRatios.sumGearRatiosFromSchematic(engineSchematic)).toBe(617);
    });
  })

  xdescribe('can handle multiple lines', () => {
    it('returns 467835 when given \n"467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598.."', () => {
      const engineSchematic = "467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..";
      expect(gearRatios.sumGearRatiosFromSchematic(engineSchematic)).toBe(467835);
    });
  })

  xdescribe('can handle empty line at end of input', () => {
    it('returns 467835 when given \n"467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..\n"', () => {
      const engineSchematic = "467..114..\n...*......\n..35..633.\n......#...\n617*......\n.....+.58.\n..592.....\n......755.\n...$.*....\n.664.598..\n";
      expect(gearRatios.sumGearRatiosFromSchematic(engineSchematic)).toBe(467835);
    });
  })
  describe('support functions', () => {
    describe('getGearAndPartData', () => {
      it('returns no gears when a `*` is not present', () => {
        expect(
          gearRatios.getPossibleGearsAndPartData("123...")
        ).toEqual([])
      })
      it('returns gears with no part numbers when a `*` is not next to any numbers', () => {
        expect(
          gearRatios.getPossibleGearsAndPartData("123.*.")
        ).toEqual([[]])
      })
      it('returns a gear and the list of the numbers when a `*` is next to two numbers', () => {
        expect(
          gearRatios.getPossibleGearsAndPartData("4*5")
        ).toEqual([[4, 5]])
      })
      it('returns a gear and the list of the numbers when a `*` is next to two numbers', () => {
        expect(
          gearRatios.getPossibleGearsAndPartData("......1*617")
        ).toEqual([[1, 617]])
      })
    })
  })
});
