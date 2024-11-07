// https://adventofcode.com/2023/day/7

const rawCardData = "32T3K 765\nT55J5 684\nKK677 28\nKTJJT 220\nQQQJA 483"

const camelCards = require('../../lib/2023/d07-camelCards');

describe('camelCards', () => {
  describe('calculateWinnings', () => {
    it(`returns 6440 when given \n"${rawCardData}"`, () => {
      expect(camelCards.calculateWinnings(rawCardData)).toBe(6440);
    });
    it(`returns 6440 when given \n"${rawCardData + '\n'}"`, () => {
      expect(camelCards.calculateWinnings(rawCardData + "\n")).toBe(6440);
    });
  });

  describe('support functions', () => {
    describe('parseCardData', () => {
      it('can create object of hands and bids from card data', () => {
        expect(
          camelCards.parseCardData(rawCardData)
        ).toEqual([
          {hand: '32T3K', bid: 765 },
          {hand: 'T55J5', bid: 684 },
          {hand: 'KK677', bid: 28 },
          {hand: 'KTJJT', bid: 220 },
          {hand: 'QQQJA', bid: 483 },
        ])
      })
    })
    describe('handTypes', () => {
      it('returns handTypes in order of increasing rank', () => {
        const cardData = camelCards.parseCardData(rawCardData)
        expect(
          Object.keys(camelCards.handTypes(cardData))
        ).toEqual([
          'highCard',
          'onePair',
          'twoPair',
          'threeOfAKind',
          'fullHouse',
          'fourOfAKind',
          'fiveOfAKind',
        ])
      })
      it('can create lists of hand types from card data', () => {
        const cardData = camelCards.parseCardData(rawCardData)
        expect(
          camelCards.handTypes(cardData)
        ).toEqual({
          highCard: [],
          onePair: [{hand: '32T3K', bid: 765 }],
          twoPair: [{hand: 'KK677', bid: 28 }, {hand: 'KTJJT', bid: 220 }],
          threeOfAKind: [{hand: 'T55J5', bid: 684 }, {hand: 'QQQJA', bid: 483 }],
          fullHouse: [],
          fourOfAKind: [],
          fiveOfAKind: [],
        })
      })
      it('can create all hand types from card data', () => {
        const cardData = camelCards.parseCardData(
          "33333 1\n33339 2\n33399 3\n33369 4\n33669 5\n33169 6\n1369Q 7"
        )
        expect(
          camelCards.handTypes(cardData)
        ).toEqual({
          highCard: [{hand: '1369Q', bid: 7}],
          onePair: [{hand: '33169', bid: 6}],
          twoPair: [{hand: '33669', bid: 5}],
          threeOfAKind: [{hand: '33369', bid: 4}],
          fullHouse: [{hand: '33399', bid: 3}],
          fourOfAKind: [{hand: '33339', bid: 2}],
          fiveOfAKind: [{hand: '33333', bid: 1}],
        })
      })
    })
    describe('rankHands', () => {
      it('can create rank object from simple cardData, handTypes', () => {
        const cardData = camelCards.parseCardData(
          "33333 1\n33339 2\n33399 3\n33369 4\n33669 5\n33169 6\n1369Q 7"
        );
        const handTypes = camelCards.handTypes(cardData)
        expect(
          camelCards.rankHands(handTypes)
        ).toEqual([
          { hand: '1369Q', bid: 7, rank: 1},
          { hand: '33169', bid: 6, rank: 2},
          { hand: '33669', bid: 5, rank: 3},
          { hand: '33369', bid: 4, rank: 4},
          { hand: '33399', bid: 3, rank: 5},
          { hand: '33339', bid: 2, rank: 6},
          { hand: '33333', bid: 1, rank: 7},
        ])
      })
      it('can create rank object from cardData, handTypes', () => {
        const cardData = camelCards.parseCardData(rawCardData);
        const handTypes = camelCards.handTypes(cardData)
        expect(
          camelCards.rankHands(handTypes)
        ).toEqual([
          { hand: '32T3K', bid: 765, rank: 1},
          { hand: 'KTJJT', bid: 220, rank: 2},
          { hand: 'KK677', bid: 28, rank: 3},
          { hand: 'T55J5', bid: 684, rank: 4},
          { hand: 'QQQJA', bid: 483, rank: 5},
        ])
      })
    })
    describe('winnings', () => {
      it('can create winnings amount rankHands object', () => {
        const rankedHands = [
          { hand: '32T3K', bid: 765, rank: 1},
          { hand: 'T55J5', bid: 684, rank: 4},
          { hand: 'KK677', bid: 28, rank: 3},
          { hand: 'KTJJT', bid: 220, rank: 2},
          { hand: 'QQQJA', bid: 483, rank: 5},
        ]
        expect(camelCards.winnings(rankedHands)).toEqual(6440)
      })
    })
    describe('cardSorterAsc', () => {
      it('can sort hands by ascending rank', () => {
        const hands = [
          'AAAAA',
          '33333',
          'QQQQQ',
          'KKKKK',
        ]
        expect(camelCards.sortByCardRank(hands)).toEqual([
          '33333',
          'QQQQQ',
          'KKKKK',
          'AAAAA',
        ])
      })
    })
  })
});
