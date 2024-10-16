module.exports = string => {
  let nums = "";
  string.split("").forEach((letter) => {
    nums += Number(letter) ? letter : ""
  });
  const num = nums[0] + nums[nums.length - 1]

  return Number(num);
}
