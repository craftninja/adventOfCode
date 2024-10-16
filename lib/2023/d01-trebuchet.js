module.exports = string => {
  const lines = string.split('\n')
  const nums = lines.map((line) => {
    let thisNum = ""
    line.split("").forEach((letter) => {
      thisNum += Number(letter) ? letter : ""
    });
    const num = thisNum[0] + thisNum[thisNum.length - 1]

    return Number(num);
  });
  return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
