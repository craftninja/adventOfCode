module.exports = string => {
  const policyAndPWs = string.split('\n')
  const pwGoods = policyAndPWs.map(policyAndPW => {
    if (policyAndPW === '') {
      return false;
    }
    const policy = policyAndPW.split(': ')[0];
    const min = policy.split('-')[0];
    const max = policy.split('-')[1].split(' ')[0];
    const letter = policy.split('-')[1].split(' ')[1];
    const pw = policyAndPW.split(': ')[1];
    const totalLetters = pw.split('').reduce(((totalLetter, thisLetter) => {
      return thisLetter === letter ? totalLetter += 1 : totalLetter
    }), 0)
    return totalLetters >= min && totalLetters <= max;
  })
  return pwGoods.reduce(((numberGoodPw, goodPw) => {
    return goodPw ? numberGoodPw += 1 : numberGoodPw;
  }), 0);
}
