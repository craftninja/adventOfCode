const camelCards = {
  calculateWinnings: (rawCardData) => {
    return camelCards.winnings(
      camelCards.rankHands(
        camelCards.handTypes(
          camelCards.parseCardData(rawCardData)
        )
      )
    )
  },
  calculateWinningsJWild: (rawCardData) => {
    return camelCards.winnings(
      camelCards.rankHandsJWild(
        camelCards.handTypesJWild(
          camelCards.parseCardData(rawCardData)
        )
      )
    )
  },
  handTypes: (cardData) => {
    let types = {
      highCard: [],
      onePair: [],
      twoPair: [],
      threeOfAKind: [],
      fullHouse: [],
      fourOfAKind: [],
      fiveOfAKind: [],
    }
    cardData.forEach((handBid) => {
      let countCards = {}
      handBid.hand.split('').forEach((card) => {
        if (countCards[card]) {
          countCards[card] += 1
        } else {
          countCards[card] = 1
        }
      });

      const uniqueCards = Object.keys(countCards)

      if (uniqueCards.length === 1) {
        types.fiveOfAKind.push(handBid)
      } else if (uniqueCards.length === 2 ) {
        if (
          countCards[uniqueCards[0]] === 4 ||
          countCards[uniqueCards[0]] === 1
        ) {
          types.fourOfAKind.push(handBid)
        } else {
          types.fullHouse.push(handBid)
        }
      } else if (uniqueCards.length === 3) {
        if (
          countCards[uniqueCards[0]] === 3 ||
          countCards[uniqueCards[1]] === 3 ||
          countCards[uniqueCards[2]] === 3
        ) {
          types.threeOfAKind.push(handBid)
        } else {
          types.twoPair.push(handBid)
        }
      } else if (uniqueCards.length === 4) {
        types.onePair.push(handBid)
      } else {
        types.highCard.push(handBid)
      }
    });
    return types;
  },
  handTypesJWild: (cardData) => {
    let types = {
      highCard: [],
      onePair: [],
      twoPair: [],
      threeOfAKind: [],
      fullHouse: [],
      fourOfAKind: [],
      fiveOfAKind: [],
    }
    cardData.forEach((handBid) => {
      let countCards = {}
      handBid.hand.split('').forEach((card) => {
        if (countCards[card]) {
          countCards[card] += 1
        } else {
          countCards[card] = 1
        }
      });
      let countCardsWithoutJs = { ...countCards}
      delete countCardsWithoutJs['J']

      const uniqueCards = Object.keys(countCards)

      const fiveOfAKind = uniqueCards.length === 1 ||
        (uniqueCards.length === 2 && countCards["J"])

      const fourOfAKind = (
        uniqueCards.length === 3 && countCards["J"] && Object.values(countCardsWithoutJs).includes(1)
      ) || (
        Object.values(countCards).includes(4) && Object.values(countCards).includes(1)
      )

      const fullHouse = (
        countCards['J'] && uniqueCards.length === 3
      ) || (
        uniqueCards.length === 2 && Object.values(countCards).includes(2) && Object.values(countCards).includes(2)
      )

      const threeOfAKind = (
        Object.values(countCards).includes(3) && Object.values(countCards).filter(numCards => numCards === 1).length === 2
      ) || (
        countCards['J'] === 2 && Object.values(countCardsWithoutJs).filter(numCards => numCards === 1).length === 3
      ) || (
        countCards['J'] === 1 && Object.values(countCards).includes(2) && Object.values(countCards).filter(numCards => numCards === 1).length === 3
      )

      const twoPair = uniqueCards.length === 3

      const onePair = Object.values(countCards).includes(2) || countCards['J']

      if ( fiveOfAKind ) {
        types.fiveOfAKind.push(handBid)
      } else if (fourOfAKind ) {
        types.fourOfAKind.push(handBid)
      } else if (fullHouse) {
        types.fullHouse.push(handBid)
      } else if (threeOfAKind) {
        types.threeOfAKind.push(handBid)
      } else if (twoPair) {
        types.twoPair.push(handBid)
      } else if (onePair) {
        types.onePair.push(handBid)
      } else {
        types.highCard.push(handBid)
      }
    });
    return types;
  },
  parseCardData: (rawCardData) => {
    return rawCardData.split('\n')
      .filter(handBid => handBid !== "")
      .map((handBid, i) => {
        const hand = handBid.split(' ')[0]
        const bid = Number(handBid.split(' ')[1])
         return { hand, bid }
      })
  },
  rankHands: (handTypes) => {
    let rankedHands = []
    let rank = 1
    Object.keys(handTypes).forEach((handType) => {
      if (handTypes[handType].length > 0) {
        const hands = handTypes[handType].map(handBid => handBid.hand)
        camelCards.sortByCardRank(hands)
        .forEach((hand) => {
          const handBid = handTypes[handType].find(e => e.hand === hand)
          rankedHands.push({ ...handBid, rank})
          rank +=1
        });

      }
    });
    return rankedHands
  },
  rankHandsJWild: (handTypes) => {
    let rankedHands = []
    let rank = 1
    Object.keys(handTypes).forEach((handType) => {
      if (handTypes[handType].length > 0) {
        const hands = handTypes[handType].map(handBid => handBid.hand)
        camelCards.sortByCardRankJWild(hands)
        .forEach((hand) => {
          const handBid = handTypes[handType].find(e => e.hand === hand)
          rankedHands.push({ ...handBid, rank})
          rank +=1
        });

      }
    });
    return rankedHands
  },
  sortByCardRank: (hands) => {
    const rankedHands = hands.map(hand => {
      return hand.replaceAll('A', 'P')
        .replaceAll('K', 'O')
        .replaceAll('Q', 'N')
        .replaceAll('J', 'M')
        .replaceAll('T', 'L')
        .replaceAll('9', 'I')
        .replaceAll('8', 'H')
        .replaceAll('7', 'G')
        .replaceAll('6', 'F')
        .replaceAll('5', 'E')
        .replaceAll('4', 'D')
        .replaceAll('3', 'C')
        .replaceAll('2', 'B')
    })
    return rankedHands.sort().map(hand => {
      return hand.replaceAll('P', 'A')
        .replaceAll('O', 'K')
        .replaceAll('N', 'Q')
        .replaceAll('M', 'J')
        .replaceAll('L', 'T')
        .replaceAll('I', '9')
        .replaceAll('H', '8')
        .replaceAll('G', '7')
        .replaceAll('F', '6')
        .replaceAll('E', '5')
        .replaceAll('D', '4')
        .replaceAll('C', '3')
        .replaceAll('B', '2')
    })
  },
  sortByCardRankJWild: (hands) => {
    const rankedHands = hands.map(hand => {
      return hand.replaceAll('A', 'P')
        .replaceAll('K', 'O')
        .replaceAll('Q', 'N')
        .replaceAll('T', 'M')
        .replaceAll('9', 'L')
        .replaceAll('8', 'I')
        .replaceAll('7', 'H')
        .replaceAll('6', 'G')
        .replaceAll('5', 'F')
        .replaceAll('4', 'E')
        .replaceAll('3', 'D')
        .replaceAll('2', 'C')
        .replaceAll('J', 'B')
    })
    return rankedHands.sort().map(hand => {
      return hand.replaceAll('P', 'A')
        .replaceAll('O', 'K')
        .replaceAll('N', 'Q')
        .replaceAll('M', 'T')
        .replaceAll('L', '9')
        .replaceAll('I', '8')
        .replaceAll('H', '7')
        .replaceAll('G', '6')
        .replaceAll('F', '5')
        .replaceAll('E', '4')
        .replaceAll('D', '3')
        .replaceAll('C', '2')
        .replaceAll('B', 'J')
    })
  },
  winnings: (rankedHands) => {
    return rankedHands.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.bid * currentValue.rank
    }, 0)
  },
}

module.exports = camelCards
