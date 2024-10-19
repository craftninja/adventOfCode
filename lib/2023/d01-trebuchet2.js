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
  .replaceAll("one", "o1e")
  .replaceAll("two", "t2o")
  .replaceAll("three", "t3e")
  .replaceAll("four", "f4r")
  .replaceAll("five", "f5e")
  .replaceAll("six", "s6x")
  .replaceAll("seven", "s7n")
  .replaceAll("eight", "e8t")
  .replaceAll("nine", "n9e")
  .replaceAll("sixteen", 16)
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
