// https://adventofcode.com/2020/day/1


const passwordPhilosophy = require('../../lib/2020/d02-passwordPhilosophy');

describe('passwordPhilosophy', () => {
  it('returns 1 when given "1-3 a: abcde"', () => {
    const passwordList = "1-3 a: abcde";
    expect(passwordPhilosophy(passwordList)).toBe(1);
  });
  it('returns 1 when given "1-3 a: abcde\n1-3 z: abcde"', () => {
    const passwordList = "1-3 a: abcde\n1-3 z: abcde";
    expect(passwordPhilosophy(passwordList)).toBe(1);
  });
  it('returns 1 when given "1-3 a: abcde\n1-3 z: abcde\n"', () => {
    const passwordList = "1-3 a: abcde\n1-3 z: abcde";
    expect(passwordPhilosophy(passwordList)).toBe(1);
  });
  it('returns 2 when given "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc"', () => {
    const passwordList = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc";
    expect(passwordPhilosophy(passwordList)).toBe(2);
  });
});
