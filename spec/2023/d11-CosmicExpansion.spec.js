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
  describe('sumOfShortestPathsBetweenAllGalaxies2', () => {
    it(`returns 374 when given \n"${rawCosmicMap}"`, () => {
      expect(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies2(rawCosmicMap, 2)).toBe(374);
    });
    it(`returns 374 when given \n"${rawCosmicMap + '\n'}"`, () => {
      expect(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies2(rawCosmicMap + "\n", 2)).toBe(374);
    });
    it(`returns 1030 when given \n"${rawCosmicMap}" with expansion of 10`, () => {
      expect(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies2(rawCosmicMap, 10)).toBe(1030);
    });
    it(`returns 8410 when given \n"${rawCosmicMap}" with expansion of 100`, () => {
      expect(cosmicExpansion.sumOfShortestPathsBetweenAllGalaxies2(rawCosmicMap, 100)).toBe(8410);
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
            cosmicExpansion.expandUniverse(
              cosmicExpansion.parseMap(rawCosmicMap)
            )
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
    describe('getExpandedGalaxyCoordinates', () => {
      it('returns coordinates of all galaxies with expansion', () => {
        expect(
          cosmicExpansion.getExpandedGalaxyCoordinates(
            cosmicExpansion.parseMap(rawCosmicMap), 2
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
      it('returns distances between galaxies with great distances', () => {
        expect(
          cosmicExpansion.getGalaxyDistances([
            [0, 0],
            [0, 1_000_001],
            [1_000_001, 0]
          ])
        ).toEqual([
          [ 1_000_001, 1_000_001 ],
          [ 2_000_002 ],
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
