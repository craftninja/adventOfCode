// https://adventofcode.com/2020/day/3


const tobogganTrajectory = require('../../lib/2020/d03-TobogganTrajectory');
const sampleData0 = "...........\n...........\n...........\n"
const sampleData1 = "...........\n...........\n......#....\n"
const sampleData2 = "...........\n...........\n......#....\n.........#.\n...........\n"
const sampleData3 = "...........\n...........\n......#....\n.........#.\n.#.........\n"
const sampleData4 = "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#"

describe('tobogganTrajectory', () => {
  it('returns 0 when given sampleData0', () => {
    expect(tobogganTrajectory(sampleData0)).toBe(0);
  });
  it('returns 1 when given sampleData1', () => {
    expect(tobogganTrajectory(sampleData1)).toBe(1);
  });
  it('returns 2 when given sampleData2', () => {
    expect(tobogganTrajectory(sampleData2)).toBe(2);
  });
  it('returns 3 when given sampleData3', () => {
    expect(tobogganTrajectory(sampleData3)).toBe(3);
  });
  it('returns 7 when given sampleData4', () => {
    expect(tobogganTrajectory(sampleData4)).toBe(7);
  });
});
