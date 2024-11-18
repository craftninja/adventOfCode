// https://adventofcode.com/2023/day/10

const rawSimpleLoopMaze = '.....\n.S-7.\n.|.|.\n.L-J.\n.....'
const rawSimpleLoopMaze2 = '-L|F7\n7S-7|\nL|7||\n-L-J|\nL|-JF'
const rawComplexLoopMaze = '..F7.\n.FJ|.\nSJ.L7\n|F--J\nLJ...'
const rawComplexLoopMaze2 = '7-F7-\n.FJ|7\nSJLL7\n|F--J\nLJ.LJ'

const pipeMaze = require('../../lib/2023/d10-pipeMaze');

describe('pipeMaze', () => {
  describe('furthestDistance', () => {
    it(`returns 4 when given \n"${rawSimpleLoopMaze}"`, () => {
      expect(pipeMaze.furthestDistance(rawSimpleLoopMaze)).toBe(4);
    });
    it(`returns 4 when given \n"${rawSimpleLoopMaze2}"`, () => {
      expect(pipeMaze.furthestDistance(rawSimpleLoopMaze2)).toBe(4);
    });
    it(`returns 8 when given \n"${rawComplexLoopMaze}"`, () => {
      expect(pipeMaze.furthestDistance(rawComplexLoopMaze)).toBe(8);
    });
    it(`returns 8 when given \n"${rawComplexLoopMaze2}"`, () => {
      expect(pipeMaze.furthestDistance(rawComplexLoopMaze2)).toBe(8);
    });
    it(`returns 4 when given \n"${rawSimpleLoopMaze + '\n'}"`, () => {
      expect(pipeMaze.furthestDistance(rawSimpleLoopMaze + "\n")).toBe(4);
    });
  });

  describe('support functions', () => {
    describe('getNextCoord', () => {
      it('returns next coordinates with coordinates and direction', () => {
        expect(pipeMaze.getNextCoord([0,0], 'N', [1,1])).toEqual(null)
        expect(pipeMaze.getNextCoord([1,1], 'N', [1,1])).toEqual([0, 1])
        expect(pipeMaze.getNextCoord([0,0], 'E', [1,1])).toEqual([0, 1])
        expect(pipeMaze.getNextCoord([0,1], 'E', [1,1])).toEqual(null)
        expect(pipeMaze.getNextCoord([0,0], 'S', [1,1])).toEqual([1, 0])
        expect(pipeMaze.getNextCoord([1,0], 'S', [1,1])).toEqual(null)
        expect(pipeMaze.getNextCoord([0,0], 'W', [1,1])).toEqual(null)
        expect(pipeMaze.getNextCoord([1,1], 'W', [1,1])).toEqual([1, 0])
      })
    })
    describe('generateLoop', () => {
      it('can return loop sequence from a raw loop maze', () => {
        expect(
          pipeMaze.generateLoop(rawSimpleLoopMaze)
        ).toEqual([
          [1, 1],
          [1, 2],
          [1, 3],
          [2, 3],
          [3, 3],
          [3, 2],
          [3, 1],
          [2, 1],
        ])
      })
    })
  })
});
