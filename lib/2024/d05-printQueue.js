const printQueue = {
  sumMiddlePageNumbersOfValidUpdates: (rawPrintInstructions) => {
    return printQueue.sumArray(
      printQueue.findMiddlePageNumbers(
        printQueue.evaluateCorrectOrders(
          printQueue.parseInstructions(rawPrintInstructions)
        ).correct
      )
    )
  },
  parseInstructions: (rawPrintInstructions) => {
    const rawRules = rawPrintInstructions.split('\n\n')[0];
    let rules = {}
    rawRules.split('\n').forEach((rule, i) => {
      const pages = rule.split('|')
      if (rules[pages[0]]) {
        rules[pages[0]].push(Number(pages[1]))
      } else {
        rules[pages[0]] = [Number(pages[1])]
      }
    });

    const requestedPagesToPrint = rawPrintInstructions
    .split('\n\n')[1]
    .split('\n')
    .map(rawUpdate => rawUpdate.split(',').map(pageNum => Number(pageNum)))
    return {
      rules,
      requestedPagesToPrint
    }
  },
  evaluateCorrectOrders: (parsedInstructions) => {
    let correct = []
    let incorrect = []

    parsedInstructions.requestedPagesToPrint.forEach((update) => {
      const weGood = update.every((page, i) => {
        const fronties = update.slice(0, i)
        const theList = parsedInstructions.rules[page]
        if (theList === undefined) {
          return true
        }

        const thisPageGood = theList.every(oneThing => {
          return !fronties.includes(oneThing)
        })
        return thisPageGood
      })
      if (weGood) {
        correct.push(update)
      } else {
        incorrect.push(update)
      }
    });

    return {correct, incorrect}
  },
  findMiddlePageNumbers: (correctPrintOrders) => {
    return correctPrintOrders.map(printOrder => {
      return printOrder[Math.floor(printOrder.length/2)]
    })
  },
  sumArray: (array) => {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  },
}

module.exports = printQueue
