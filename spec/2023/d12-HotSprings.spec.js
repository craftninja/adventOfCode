// https://adventofcode.com/2023/day/12

const rawDamagedConditionRecords = '???.### 1,1,3\n.??..??...?##. 1,1,3\n?#?#?#?#?#?#?#? 1,3,1,6\n????.#...#... 4,1,1\n????.######..#####. 1,6,5\n?###???????? 3,2,1'

const hotSprings = require('../../lib/2023/d12-hotSprings');

describe('hotSprings', () => {
  xdescribe('sumOfPossibleArrangements', () => {
    it(`returns 21 when given \n"${rawDamagedConditionRecords}"`, () => {
      expect(hotSprings.sumOfPossibleArrangements(rawDamagedConditionRecords)).toBe(21);
    });
    it(`returns 21 when given \n"${rawDamagedConditionRecords + '\n'}"`, () => {
      expect(hotSprings.sumOfPossibleArrangements(rawDamagedConditionRecords + "\n")).toBe(21);
    });
  });

  describe('support functions', () => {
    describe('parseRecords', () => {
      it('returns parsed records from a raw records', () => {
        expect(
          hotSprings.parseRecords(rawDamagedConditionRecords)
        ).toEqual({
          conditionRecords: [
            '???.###',
            '.??..??...?##.',
            '?#?#?#?#?#?#?#?',
            '????.#...#...',
            '????.######..#####.',
            '?###????????',
          ],
          damagedSpringSizes: [
            [1,1,3],
            [1,1,3],
            [1,3,1,6],
            [4,1,1],
            [1,6,5],
            [3,2,1],
          ],
        })
      })
    })
    xdescribe('evalRecordPair', () => {
      it('returns number of arrangements possible from record pair', () => {
        expect(
          hotSprings.evalRecordPair('???.###', [1,1,3])
        ).toEqual(1)
      })
    })
  })
});
