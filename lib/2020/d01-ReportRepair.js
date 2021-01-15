module.exports = string => {
  const numbers = string.split('\n').map(num => Number(num))
  let sum;
  numbers.forEach((number, i) => {
    const restOfNumbers = numbers.slice(i+1)
    const passingNumber = restOfNumbers.find( otherNumber => {
      return otherNumber + number === 2020
    })
    if (passingNumber) {
      sum = number * passingNumber
    }
  });

  return sum;
}
