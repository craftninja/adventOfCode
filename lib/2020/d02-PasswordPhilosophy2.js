module.exports = string => {
  const policyAndPWs = string.split('\n')
  const pwGoods = policyAndPWs.map(policyAndPW => {
    if (policyAndPW === '') {
      return false;
    }
    const policy = policyAndPW.split(': ')[0];
    const eitherAt = policy.split('-')[0] - 1;
    const orAt = policy.split('-')[1].split(' ')[0] - 1;
    const policyLetter = policy.split('-')[1].split(' ')[1];
    const pw = policyAndPW.split(': ')[1];

    return (pw[eitherAt] === policyLetter || pw[orAt] === policyLetter) && pw[eitherAt] !== pw[orAt]
  })
  return pwGoods.reduce(((numberGoodPw, goodPw) => {
    return goodPw ? numberGoodPw += 1 : numberGoodPw;
  }), 0);
}
