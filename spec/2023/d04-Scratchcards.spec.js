// https://adventofcode.com/2023/day/4

const sampleRawScratchcards = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\nCard 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\nCard 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\nCard 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\nCard 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"
const sampleScratchcardsPoints = 13


const scratchcards = require('../../lib/2023/d04-scratchcards');

describe('scratchcards sumOfScratchcardPoints', () => {
  describe('can handle one line and', () => {
    it('returns 0 when given "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36"', () => {
      const rawScratchcard = "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36";
      expect(scratchcards.sumOfScratchcardPoints(rawScratchcard)).toBe(0);
    });
    it('returns 1 when given "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83"', () => {
      const rawScratchcard = "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83";
      expect(scratchcards.sumOfScratchcardPoints(rawScratchcard)).toBe(1);
    });
    it('returns 2 when given "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19"', () => {
      const rawScratchcard = "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19";
      expect(scratchcards.sumOfScratchcardPoints(rawScratchcard)).toBe(2);
    });
    it('returns 8 when given "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"', () => {
      const rawScratchcard = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";
      expect(scratchcards.sumOfScratchcardPoints(rawScratchcard)).toBe(8);
    });
  })

  describe('can handle multiple lines', () => {
    it(`returns 467835 when given \n"${sampleRawScratchcards}"`, () => {
      expect(scratchcards.sumOfScratchcardPoints(sampleRawScratchcards)).toBe(sampleScratchcardsPoints);
    });
  })

  describe('can handle empty line at end of input', () => {
    it(`returns 467835 when given \n"${sampleRawScratchcards}\n"`, () => {
      expect(scratchcards.sumOfScratchcardPoints(sampleRawScratchcards + "\n")).toBe(sampleScratchcardsPoints);
    });
  })

  describe('support functions', () => {
    describe('sumArray', () => {
      it('can sum an array', () => {
        expect(scratchcards.sumArray([1,2,3])).toBe(6)
      })
    })
  })
});
