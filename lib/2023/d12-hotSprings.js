const hotSprings = {
  parseRecords: (rawDamagedConditionRecords) => {
    let conditionRecords = []
    let damagedSpringSizes = []
    rawDamagedConditionRecords.split('\n').filter(line => line != '').forEach((line, i) => {
      conditionRecords.push(line.split(' ')[0])
      damagedSpringSizes.push(line.split(' ')[1].split(',').map(num => Number(num)))
    });
    return {
      conditionRecords,
      damagedSpringSizes,
    }
  },
  evalRecordPair: (conditionRecord, damagedSpringSizes) => {
    console.log(conditionRecord.split('.'));
    console.log(damagedSpringSizes);
  },
}

module.exports = hotSprings
