// https://adventofcode.com/2024/day/5

const rawPrintInstructions = '47|53\n97|13\n97|61\n97|47\n75|29\n61|13\n75|53\n29|13\n97|29\n53|29\n61|53\n97|53\n61|29\n47|13\n75|47\n97|75\n47|61\n75|61\n47|29\n75|13\n53|13\n\n75,47,61,53,29\n97,61,53,29,13\n75,29,13\n75,97,47,61,53\n61,13,29\n97,13,75,29,47'


const printQueue = require('../../lib/2024/d05-printQueue');

describe('printQueue', () => {
  describe('sumMiddlePageNumbersOfValidUpdates', () => {
    it(`returns 143 when given \n"${rawPrintInstructions}"`, () => {
      expect(printQueue.sumMiddlePageNumbersOfValidUpdates(rawPrintInstructions)).toBe(143);
    });
    it(`returns 143 when given \n"${rawPrintInstructions + '\n'}"`, () => {
      expect(printQueue.sumMiddlePageNumbersOfValidUpdates(rawPrintInstructions + "\n")).toBe(143);
    });
  });
  describe('sumMiddlePageNumbersOfInvalidUpdates', () => {
    it(`returns 123 when given \n"${rawPrintInstructions}"`, () => {
      expect(printQueue.sumMiddlePageNumbersOfInvalidUpdates(rawPrintInstructions)).toBe(123);
    });
    it(`returns 123 when given \n"${rawPrintInstructions + '\n'}"`, () => {
      expect(printQueue.sumMiddlePageNumbersOfInvalidUpdates(rawPrintInstructions + "\n")).toBe(123);
    });
  });

  describe('support functions', () => {
    describe('parsePrintInstructions', () => {
      it('returns parsed rules and pageNumbersForUpdate from raw instructions', () => {
        expect(
          Object.keys(
            printQueue.parseInstructions(rawPrintInstructions)
          )).toEqual(['rules', 'requestedPagesToPrint'])
        expect(Object.keys(printQueue.parseInstructions(rawPrintInstructions).rules)).toContain('29')
        expect(Object.keys(printQueue.parseInstructions(rawPrintInstructions).rules)).toContain('47')
        expect(Object.keys(printQueue.parseInstructions(rawPrintInstructions).rules)).toContain('53')
        expect(Object.keys(printQueue.parseInstructions(rawPrintInstructions).rules)).toContain('61')
        expect(Object.keys(printQueue.parseInstructions(rawPrintInstructions).rules)).toContain('75')
        expect(Object.keys(printQueue.parseInstructions(rawPrintInstructions).rules)).toContain('97')
        expect(
          printQueue.parseInstructions(rawPrintInstructions).requestedPagesToPrint
        ).toEqual([
          [75,47,61,53,29],
          [97,61,53,29,13],
          [75,29,13],
          [75,97,47,61,53],
          [61,13,29],
          [97,13,75,29,47],
        ])
      })
    })
    describe('evaluateCorrectOrders', () => {
      it('takes rules and requested pages and returns correct updates', () => {
        expect(
          printQueue.evaluateCorrectOrders({
            rules: {
              29: [13],
              47: [13, 53, 61, 29],
              53: [13, 29],
              61: [13, 29, 53],
              75: [13, 29, 47, 53, 61],
              97: [13, 29, 47, 53, 61, 75],
            },
            requestedPagesToPrint: [
              [75,47,61,53,29],
              [97,61,53,29,13],
              [75,29,13],
              [75,97,47,61,53],
              [61,13,29],
              [97,13,75,29,47],
            ]
          })
        ).toEqual({
          correct: [
            [75,47,61,53,29],
            [97,61,53,29,13],
            [75,29,13],
          ],
          incorrect: [
            [75,97,47,61,53],
            [61,13,29],
            [97,13,75,29,47],
          ],
        })
      })
    })
    describe('reorderIncorrectOrders', () => {
      it('returns the ordered version of incorrect updates', () => {
        expect(printQueue.reorderIncorrectOrders({
          correct: [],
          incorrect: [
            [75,97,47,61,53],
            [61,13,29],
            [97,13,75,29,47],
          ]
        }, {
          47: [13, 53, 61, 29],
          97: [13, 29, 47, 53, 61, 75],
          75: [13, 29, 47, 53, 61],
          61: [13, 29, 53],
          29: [13],
          53: [13, 29],
        })).toEqual([
          [97,75,47,61,53],
          [61,29,13],
          [97,75,47,29,13],
        ])
      })
      it('returns the ordered version of incorrect updates 2', () => {
        const reorder = printQueue.reorderIncorrectOrders({
          correct: [],
          incorrect: [
            [97,47,61,53,75],
            [61,13,29],
            [97,13,75,29,47],
          ]
        }, {
          47: [13, 53, 61, 29],
          97: [13, 29, 47, 53, 61, 75],
          75: [13, 29, 47, 53, 61],
          61: [13, 29, 53],
          29: [13],
          53: [13, 29],
        })
        expect(reorder).toContain([97,75,47,61,53])
        expect(reorder).toContain([61,29,13])
        expect(reorder).toContain([97,75,47,29,13])
      })
    })
    describe('findMiddlePageNumbers', () => {
      it('takes a list of correct updates and returns all the middle numbers', () => {
        expect(
          printQueue.findMiddlePageNumbers([
            [75,47,61,53,29],
            [97,61,53,29,13],
            [75,29,13],
          ])
        ).toEqual([61, 53, 29])
      })
    })
    describe('sumArray', () => {
      it('takes a list of correct updates and returns all the middle numbers', () => {
        expect(
          printQueue.sumArray([61, 53, 29])
        ).toEqual(143)
      })
    })
  })
});
