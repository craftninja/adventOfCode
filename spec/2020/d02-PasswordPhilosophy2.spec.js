// https://adventofcode.com/2020/day/2


const passwordPhilosophy2 = require('../../lib/2020/d02-passwordPhilosophy2');

describe('passwordPhilosophy2', () => {
  it('returns 0 when given "1-3 a: abade"', () => {
    const passwordList = "1-3 a: abade";
    expect(passwordPhilosophy2(passwordList)).toBe(0);
  });
  it('returns 1 when given "1-3 a: abcde"', () => {
    const passwordList = "1-3 a: abcde";
    expect(passwordPhilosophy2(passwordList)).toBe(1);
  });
  it('returns 1 when given "1-3 a: cbade"', () => {
    const passwordList = "1-3 a: cbade";
    expect(passwordPhilosophy2(passwordList)).toBe(1);
  });
  it('returns 2 when given "1-3 a: abcde\n1-3 z: abzde\n"', () => {
    const passwordList = "1-3 a: abcde\n1-3 z: zbcde\n";
    expect(passwordPhilosophy2(passwordList)).toBe(2);
  });
  it('returns 1 when given "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc"', () => {
    const passwordList = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc";
    expect(passwordPhilosophy2(passwordList)).toBe(1);
  });
});
