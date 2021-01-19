const fs = require('fs');

const tobogganTrajectory2 = require('../../lib/2020/d03-TobogganTrajectory2');
const data = fs.readFileSync('./fixtures/2020/d03-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data
});
// const data = "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#"
const multiplied =
  tobogganTrajectory2(data, 1, 1) *
  tobogganTrajectory2(data, 3, 1) *
  tobogganTrajectory2(data, 5, 1) *
  tobogganTrajectory2(data, 7, 1) *
  tobogganTrajectory2(data, 1, 2)

console.log(multiplied)
