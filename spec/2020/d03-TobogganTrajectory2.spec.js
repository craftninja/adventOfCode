// https://adventofcode.com/2020/day/3#part2


const tobogganTrajectory2 = require('../../lib/2020/d03-TobogganTrajectory2');
const sampleData = "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#"

describe('tobogganTrajectory2', () => {
  it('returns 2 when given sampleData and slope of 1, 1', () => {
    expect(tobogganTrajectory2(sampleData, 1, 1)).toBe(2);
  });
  it('returns 7 when given sampleData and slope of 3, 1', () => {
    expect(tobogganTrajectory2(sampleData, 3, 1)).toBe(7);
  });
  it('returns 3 when given sampleData and slope of 5, 1', () => {
    expect(tobogganTrajectory2(sampleData, 5, 1)).toBe(3);
  });
  it('returns 4 when given sampleData and slope of 7, 1', () => {
    expect(tobogganTrajectory2(sampleData, 7, 1)).toBe(4);
  });
  it('returns 2 when given sampleData and slope of 1, 2', () => {
    expect(tobogganTrajectory2(sampleData, 1, 2)).toBe(2);
  });
  it('returns 2 when given sampleData and slope of 3, 2', () => {
    expect(tobogganTrajectory2(sampleData, 3, 2)).toBe(2);
  });
});
