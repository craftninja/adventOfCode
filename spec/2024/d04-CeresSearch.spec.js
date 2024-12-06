// https://adventofcode.com/2024/day/4

const rawCrossword = 'MMMSXXMASM\nMSAMXMSMSA\nAMXSXMAAMM\nMSAMASMSMX\nXMASAMXAMM\nXXAMMXXAMA\nSMSMSASXSS\nSAXAMASAAA\nMAMMMXMMMM\nMXMXAXMASX'

const ceresSearch = require('../../lib/2024/d04-ceresSearch');

describe('ceresSearch', () => {
  describe('countXmas', () => {
    it(`returns 18 when given \n"${rawCrossword}"`, () => {
      expect(ceresSearch.countXmas(rawCrossword)).toBe(18);
    });
    it(`returns 18 when given \n"${rawCrossword + '\n'}"`, () => {
      expect(ceresSearch.countXmas(rawCrossword + "\n")).toBe(18);
    });
  });

  describe('support functions', () => {
    describe('parseCrossword', () => {
      it('returns parsed crossword from a raw crossword', () => {
        expect(
          ceresSearch.parseCrossword(rawCrossword)
        ).toEqual([
          'MMMSXXMASM',
          'MSAMXMSMSA',
          'AMXSXMAAMM',
          'MSAMASMSMX',
          'XMASAMXAMM',
          'XXAMMXXAMA',
          'SMSMSASXSS',
          'SAXAMASAAA',
          'MAMMMXMMMM',
          'MXMXAXMASX',
        ])
      })
    })
    describe('findXmases', () => {
      it('finds multiple XMASs', () => {
        expect(
          ceresSearch.findXmases([
            'MMMSXXMASM',
            'MSAMXMSMSA',
            'AMXSXMAAMM',
            'MSAMASMSMX',
            'XMASAMXAMM',
            'XXAMMXXAMA',
            'SMSMSASXSS',
            'SAXAMASAAA',
            'MAMMMXMMMM',
            'MXMXAXMASX',
          ])
        ).toEqual(18)
      })
      it('finds 0 for no XMAS', () => {
        expect(
          ceresSearch.findXmases([
            '.....X....',
          ])
        ).toEqual(0)
      })
      it('finds a XMAS north', () => {
        expect(
          ceresSearch.findXmases([
            'S........X',
            'A.........',
            'M.........',
            'X.........',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS northeast', () => {
        expect(
          ceresSearch.findXmases([
            '.........S',
            '........AX',
            '.......M..',
            '......X...',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS east', () => {
        expect(
          ceresSearch.findXmases([
            '.....XMASX',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS southeast', () => {
        expect(
          ceresSearch.findXmases([
            '..X.......',
            '...M......',
            '....A.....',
            '.....S...X',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS south', () => {
        expect(
          ceresSearch.findXmases([
            '..X.......',
            '..M.......',
            '..A.......',
            '..S......X',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS southwest', () => {
        expect(
          ceresSearch.findXmases([
            '.......X..',
            '......M...',
            '.....A....',
            'X...S.....',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS west', () => {
        expect(
          ceresSearch.findXmases([
            'X....SAMX.',
          ])
        ).toEqual(1)
      })
      it('finds a XMAS northwest', () => {
        expect(
          ceresSearch.findXmases([
            'X...S.....',
            '.....A....',
            '......M...',
            '.......X..',
          ])
        ).toEqual(1)
      })
    })
  })
});
