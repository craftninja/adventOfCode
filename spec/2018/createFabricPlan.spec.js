// https://adventofcode.com/2018/day/3


const createFabricPlan = require('../../lib/2018/createFabricPlan');

describe('createFabricPlan', () => {
  it('returns proper fabric when given "#1 @ 1,3: 4x2"', () => {
    const order = "#1 @ 1,3: 4x2";
    let row = []
    row[1] = 1
    row[2] = 1
    row[3] = 1
    row[4] = 1
    let expected = []
    expected[3] = row
    expected[4] = row
    const actual = createFabricPlan(order);
    expect(actual).toEqual(expected);
  });

  it('returns proper fabric when given "#1 @ 1,3: 4x4"', () => {
    const order = "#1 @ 1,3: 4x4";
    let row = []
    row[1] = 1
    row[2] = 1
    row[3] = 1
    row[4] = 1
    let expected = []
    expected[3] = row
    expected[4] = row
    expected[5] = row
    expected[6] = row
    const actual = createFabricPlan(order);
    expect(actual).toEqual(expected);
  });

  it('returns proper fabric when given "#1 @ 1,3: 4x4"\n #2 @ 1,3: 4x4\n #3 @ 1,3: 4x4"', () => {
    const order = "#1 @ 1,3: 4x4\n #2 @ 1,3: 4x4\n #3 @ 1,3: 4x4";
    let row = []
    row[1] = 'X'
    row[2] = 'X'
    row[3] = 'X'
    row[4] = 'X'
    let expected = []
    expected[3] = row
    expected[4] = row
    expected[5] = row
    expected[6] = row
    const actual = createFabricPlan(order);
    expect(actual).toEqual(expected);
  });

  it('returns proper fabric when given "#1 @ 1,3: 4x4\n #2 @ 3,1: 4x4\n #3 @ 5,5: 2x2\n"', () => {
    const order = "#1 @ 1,3: 4x4\n #2 @ 3,1: 4x4\n #3 @ 5,5: 2x2\n";
    let rowA = []
    rowA[3] = 2
    rowA[4] = 2
    rowA[5] = 2
    rowA[6] = 2
    let rowB = []
    rowB[1] = 1
    rowB[2] = 1
    rowB[3] = 'X'
    rowB[4] = 'X'
    rowB[5] = 2
    rowB[6] = 2
    let rowC = []
    rowC[1] = 1
    rowC[2] = 1
    rowC[3] = 1
    rowC[4] = 1
    rowC[5] = 3
    rowC[6] = 3
    let expected = []
    expected[1] = rowA
    expected[2] = rowA
    expected[3] = rowB
    expected[4] = rowB
    expected[5] = rowC
    expected[6] = rowC
    const actual = createFabricPlan(order);
    expect(actual).toEqual(expected);
  });
});
