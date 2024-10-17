module.exports = messedCalibrationValues => {
  const messedCalibrationValueList = messedCalibrationValues.split('\n')
  const calibrationValues = messedCalibrationValueList.map((messedCalibrationValue) => {
    return getCalibrationValue(messedCalibrationValue)
  });
  return sumArray(calibrationValues)
}

function getCalibrationValue(messedCalibrationValue) {
  let thisNum = ""
  messedCalibrationValue.split("").forEach((letter) => {
    thisNum += Number(letter) ? letter : ""
  });
  const calibrationString = thisNum[0] + thisNum[thisNum.length - 1]

  return Number(calibrationString);
};

function sumArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
