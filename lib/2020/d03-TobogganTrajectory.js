module.exports = map => {
  const latitudeRows = map.split('\n');
  let trees = 0;
  latitudeRows.forEach((row, i) => {
    if (row === '') { return }
    const repeats = Math.ceil((i*3+1) / row.length) - 1
    const longitude = (i*3) - (repeats * row.length)
    if (row[longitude] === '#') {
      trees += 1;
    }
  });
  return trees;
}
