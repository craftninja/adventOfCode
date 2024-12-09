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
  sumMiddlePageNumbersOfInvalidUpdates: (rawPrintInstructions) => {
    const parsedInstructions = printQueue.parseInstructions(rawPrintInstructions)
    const printEvaluation = printQueue.evaluateCorrectOrders(
      parsedInstructions
    )
    const reorderedInvalidUpdates = printQueue.reorderIncorrectOrders(
      {
        correct: [],
        incorrect: printEvaluation.incorrect
      },
      parsedInstructions.rules,
    )
    return printQueue.sumArray(
      printQueue.findMiddlePageNumbers(reorderedInvalidUpdates)
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
  reorderIncorrectOrders: (orders, rules) => {
    const incorrect = orders.incorrect

    let reorders = [...incorrect.map(order => [...order])]

    incorrect.forEach((order, orderI) => {
      order.forEach((pageNumber, i) => {
        const fronties = order.slice(0, i)
        const theList = rules[pageNumber]
        if (theList === undefined) {
          return true
        }
        fronties.forEach((fronty, f) => {
          const thereAreRules = theList.includes(fronty)
          const updatedPageNumberI = reorders[orderI].indexOf(pageNumber)

          if (thereAreRules) {
            reorders[orderI] = [
              ...reorders[orderI].slice(0, updatedPageNumberI).filter(num => num != fronty),
              pageNumber,
              fronty,
              ...reorders[orderI].slice(updatedPageNumberI+1, reorders[orderI].length)
            ]
          }
        });
      });
    });
    const reEval = printQueue.evaluateCorrectOrders(
      { rules, requestedPagesToPrint: reorders}
    )
    if (reEval.incorrect.length === 0) {
      return [...orders.correct, ...reEval.correct]
    } else {
      const newOrders = {
        correct: [...orders.correct, ...reEval.correct],
        incorrect: reEval.incorrect
      }
      return printQueue.reorderIncorrectOrders(newOrders, rules)
    }

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
