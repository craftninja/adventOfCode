module.exports = (map, right, down) => {
  const latitudeRows = map.split('\n');
  let trees = 0;
  let i = 0;
  latitudeRows.forEach((row, latitude) => {
    if (row === '') { return };
    if (latitude % down !== 0) { return };
    const repeats = Math.ceil((i*right+1) / row.length) - 1
    const longitude = (i * right) - (repeats * row.length)
    i+=1
    if (row[longitude] === '#') {
      trees += 1;
    }
  });
  return trees;
}
