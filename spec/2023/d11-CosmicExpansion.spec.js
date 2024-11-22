// https://adventofcode.com/2023/day/11

const rawCosmicMap = '...#......\n.......#..\n#.........\n..........\n......#...\n.#........\n.........#\n..........\n.......#..\n#...#.....'
const rawCosmicMapExpanded = "....#........\n.........#...\n#............\n.............\n.............\n........#....\n.#...........\n............#\n.............\n.............\n.........#...\n#....#......."


const cosmicExpansion = require('../../lib/2023/d11-cosmicExpansion');

describe('cosmicExpansion', () => {
  describe('sumOfShortestPathsBetweenAllGalaxies', () => {
    it(`returns 374 when given \n"${rawCosmicMap}"`, () => {
      expect(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies(rawCosmicMap)).toBe(374);
    });
    it(`returns 374 when given \n"${rawCosmicMap + '\n'}"`, () => {
      expect(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies(rawCosmicMap + "\n")).toBe(374);
    });
  });

  describe('support functions', () => {
    describe('parseMap', () => {
      it('returns parsed map from a raw map', () => {
        expect(cosmicExpansion.parseMap(rawCosmicMap)).toEqual([
          ['.', '.', '.', '#', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
          ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
          ['.', '#', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
          ['#', '.', '.', '.', '#', '.', '.', '.', '.', '.'],
        ])
      })
    })
    describe('expandUniverse', () => {
      it('returns properly expanded universe', () => {
        expect(
          cosmicExpansion.expandUniverse(
            cosmicExpansion.parseMap(rawCosmicMap)
          )
        ).toEqual(
          cosmicExpansion.parseMap(rawCosmicMapExpanded)
        )
      })
    })
    describe('getGalaxyCoordinates', () => {
      it('returns coordinates of all galaxies', () => {
        expect(
          cosmicExpansion.getGalaxyCoordinates(
            cosmicExpansion.parseMap(rawCosmicMapExpanded)
          )
        ).toEqual([
          [0, 4],
          [1, 9],
          [2, 0],
          [5, 8],
          [6, 1],
          [7, 12],
          [10, 9],
          [11, 0],
          [11, 5],
        ])
      })
    })
    describe('getGalaxyDistances', () => {
      it('returns distances between each galaxy to each other galaxy', () => {
        expect(
          cosmicExpansion.getGalaxyDistances(
            cosmicExpansion.getGalaxyCoordinates(
              cosmicExpansion.parseMap(rawCosmicMapExpanded)
            )
          )
        ).toEqual([
          [ 6, 6, 9, 9, 15, 15, 15, 12 ],
          [ 10, 5, 13, 9, 9, 19, 14 ],
          [ 11, 5, 17, 17, 9, 14 ],
          [ 8, 6, 6, 14, 9 ],
          [ 12, 12, 6, 9 ],
          [ 6, 16, 11 ],
          [ 10, 5 ],
          [ 5 ],
        ])
      })
    })
    describe('sumArrayOfArrays', () => {
      it('returns a sum when given an array of arrays', () => {
        expect(
          cosmicExpansion.sumArrayOfArrays([
            [ 6, 6, 9, 9, 15, 15, 15, 12 ],
            [ 10, 5, 13, 9, 9, 19, 14 ],
            [ 11, 5, 17, 17, 9, 14 ],
            [ 8, 6, 6, 14, 9 ],
            [ 12, 12, 6, 9 ],
            [ 6, 16, 11 ],
            [ 10, 5 ],
            [ 5 ],
          ])
        ).toEqual(374)
      })
    })
  })
});
