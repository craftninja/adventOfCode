module.exports = string => {
  const numbers = string.split('\n').map(num => Number(num))
  let sum;
  numbers.forEach((number, i) => {
    const restOfNumbers = numbers.slice(i+1)
    restOfNumbers.forEach((secondNumber, ri) => {
      const lastOfNumbers = restOfNumbers.slice(ri+1)
      const passingNumber = lastOfNumbers.find( lastNumber => {
        return number + secondNumber + lastNumber === 2020
      })
      if (passingNumber) {
        sum = number * secondNumber * passingNumber
      }
    });

  });

  return sum;
}
