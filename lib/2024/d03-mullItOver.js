const mullItOver = {
  mulSumCorruptedMemory: (rawCorruptedMemory) => {
    return mullItOver.mulSumArray(
      mullItOver.parsedMulInstructions(rawCorruptedMemory)
    )
  },
  mulSumCorruptedMemoryFollowingInstructions: (rawCorruptedMemory) => {
    return mullItOver.mulSumArray(
      mullItOver.parsedMulFollowingInstructions(rawCorruptedMemory)
    )
  },
  parsedMulInstructions: (rawCorruptedMemory) => {
    const muls = rawCorruptedMemory.matchAll(/mul[(]\d+,\d+[)]/gm)
    const parsedMuls = [...muls].map(mulRegexReturn => {
      const stringNums = mulRegexReturn[0].split('(')[1]
      .split(')')[0]
      .split(',')
      return stringNums.map(stringNum => Number(stringNum))
    })
    return parsedMuls
  },
  parsedMulFollowingInstructions: (rawCorruptedMemory) => {
    const scrubbedRawCorruptedMem = rawCorruptedMemory.split(/don't[(][)](.| )+?do[(][)]/gms).join('')
    const muls = scrubbedRawCorruptedMem.matchAll(/mul[(]\d+,\d+[)]/gm)
    const parsedMuls = [...muls].map(mulRegexReturn => {
      const stringNums = mulRegexReturn[0].split('(')[1]
      .split(')')[0]
      .split(',')
      return stringNums.map(stringNum => Number(stringNum))
    })
    return parsedMuls
  },
  mulSumArray: (arrayOfArrays) => {
    return arrayOfArrays
    .map(numsToMul => numsToMul[0] * numsToMul[1])
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = mullItOver
