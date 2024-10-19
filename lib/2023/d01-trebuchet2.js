module.exports = messedCalibrationValues => {
  const messedCalibrationValueList = messedCalibrationValues.split('\n')
  const calibrationValues = messedCalibrationValueList.map((messedCalibrationValue) => {
    const numbersOnly = numberifyNumberWords(messedCalibrationValue)
    return getCalibrationValue(numbersOnly)
  });
  return sumArrayRemovingNaNs(calibrationValues)
}

function numberifyNumberWords(messedCalibrationValue) {
  return messedCalibrationValue
  .replace("one", "o1e")
  .replace("two", "t2o")
  .replace("three", "t3e")
  .replace("four", "f4r")
  .replace("five", "f5e")
  .replace("six", "s6x")
  .replace("seven", "s7n")
  .replace("eight", "e8t")
  .replace("nine", "n9e")
  .replace("sixteen", 16)
}

function getCalibrationValue(messedCalibrationValue) {
  let thisNum = ""
  messedCalibrationValue.split("").forEach((letter) => {
    thisNum += Number(letter) ? letter : ""
  });
  const calibrationString = thisNum[0] + thisNum[thisNum.length - 1]

  return Number(calibrationString);
};

function sumArrayRemovingNaNs(array) {
  return array
  .filter(number => !isNaN(number))
  .reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
