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
  describe('calculateWinningsJWild', () => {
    it(`returns 5905 when given \n"${rawCardData}"`, () => {
      expect(camelCards.calculateWinningsJWild(rawCardData)).toBe(5905);
    });
    it(`returns 5905 when given \n"${rawCardData + '\n'}"`, () => {
      expect(camelCards.calculateWinningsJWild(rawCardData + "\n")).toBe(5905);
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
      it('can create lists of hand types from card data with J Wild', () => {
        const cardData = camelCards.parseCardData(rawCardData)
        expect(
          camelCards.handTypesJWild(cardData)
        ).toEqual({
          highCard: [],
          onePair: [{hand: '32T3K', bid: 765 }],
          twoPair: [{hand: 'KK677', bid: 28 }],
          threeOfAKind: [],
          fullHouse: [],
          fourOfAKind: [
            {hand: 'T55J5', bid: 684 },
            {hand: 'KTJJT', bid: 220 },
            {hand: 'QQQJA', bid: 483 },
          ],
          fiveOfAKind: [],
        })
      })
      it('can create all hand types from card data with J wild', () => {
        const cardData = [
          {hand: '55555', bid: 5 },
          {hand: '5555J', bid: 5 },
          {hand: '555JJ', bid: 5 },
          {hand: '4444K', bid: 4 },
          {hand: '444JK', bid: 4 },
          {hand: '44JJK', bid: 4 },
          {hand: '4JJJK', bid: 4 },
          {hand: '99966', bid: 9 },
          {hand: '99J66', bid: 9 },
          {hand: '33396', bid: 3 },
          {hand: '33J96', bid: 3 },
          {hand: '3JJ96', bid: 3 },
          {hand: '22446', bid: 4 },
          {hand: '22468', bid: 2 },
          {hand: '2J468', bid: 2 },
          {hand: '24689', bid: 1 },
        ]
        expect(
          camelCards.handTypesJWild(cardData)
        ).toEqual({
          highCard: [
            {hand: '24689', bid: 1 },
          ],
          onePair: [
            {hand: '22468', bid: 2 },
            {hand: '2J468', bid: 2 },
          ],
          twoPair: [
            {hand: '22446', bid: 4 },
          ],
          threeOfAKind: [
            {hand: '33396', bid: 3 },
            {hand: '33J96', bid: 3 },
            {hand: '3JJ96', bid: 3 },
          ],
          fullHouse: [
            {hand: '99966', bid: 9 },
            {hand: '99J66', bid: 9 },
          ],
          fourOfAKind: [
            {hand: '4444K', bid: 4 },
            {hand: '444JK', bid: 4 },
            {hand: '44JJK', bid: 4 },
            {hand: '4JJJK', bid: 4 },
          ],
          fiveOfAKind: [
            {hand: '55555', bid: 5 },
            {hand: '5555J', bid: 5 },
            {hand: '555JJ', bid: 5 },
          ],
        })
      })
    })
    describe('rankHands', () => {
      it('can create rank object from simple handTypes', () => {
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
      it('can create rank object from handTypes', () => {
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
      it('can create rank object from handTypes with J Wild', () => {
        const cardData = camelCards.parseCardData(rawCardData);
        const handTypes = camelCards.handTypesJWild(cardData)
        expect(
          camelCards.rankHands(handTypes)
        ).toEqual([
          { hand: '32T3K', bid: 765, rank: 1},
          { hand: 'KK677', bid: 28, rank: 2},
          { hand: 'T55J5', bid: 684, rank: 3},
          { hand: 'QQQJA', bid: 483, rank: 4},
          { hand: 'KTJJT', bid: 220, rank: 5},
        ])
      })
      it('can create rank object with J as least rank with J Wild', () => {
        expect(
          camelCards.rankHandsJWild({
            highCard: [],
            onePair: [],
            twoPair: [],
            threeOfAKind: [],
            fullHouse: [],
            fourOfAKind: [
              {hand: '88882', bid: 1},
              {hand: 'JKKK2', bid: 2},
            ],
            fiveOfAKind: [],
          })
        ).toEqual([
          { hand: 'JKKK2', bid: 2, rank: 1},
          { hand: '88882', bid: 1, rank: 2},
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
